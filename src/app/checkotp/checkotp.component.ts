import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkotp',
  templateUrl: './checkotp.component.html',
  styleUrls: ['./checkotp.component.css']
})
export class CheckotpComponent implements OnInit {
  otpForm!: FormGroup;
  otp: string = '';

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', Validators.minLength(6)],
      email: ['', Validators.email]
    })
  }

  verifyOTP(): void {
    this.http.post('https://otpservice.onrender.com/0auth/verifyOtp', {uid: this.activatedRoute.snapshot.paramMap.get('uid'), otp: this.otpForm.controls['otp'].value, email: this.otpForm.controls['email'].value})
    .subscribe({
      next: (payload: any) => {
        if(payload.otpValid) {
          if(!payload.otpExpired) {
            this.router.navigate(['login']);
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
