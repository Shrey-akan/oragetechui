import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-optverify',
  templateUrl: './optverify.component.html',
  styleUrls: ['./optverify.component.css']
})
export class OptverifyComponent  implements OnInit {
  otpForm!: FormGroup;
  otp: string = '';

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute,private b1:UserService) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', Validators.minLength(6)],
      email: ['', Validators.email]
    })
  }

  verifyOTP(): void {
    this.http.post('https://otpservice.onrender.com/0auth/verifyOtp', {uid: this.activatedRoute.snapshot.paramMap.get('empid'), otp: this.otpForm.controls['otp'].value, email: this.otpForm.controls['email'].value})
    .subscribe({
      next: (payload: any) => {
        if(payload.otpValid) {
          if(!payload.otpExpired) {
            
            this.router.navigate(['/employer/empregister']);
            
          }
          else {
            console.error("Otp expired");
          }
        }
        else {
          console.error("Otp not valid");
        }
      },
      error: (err) => {
        console.error(`Some error occured: ${err}`);
      }
    })
  }

}
