import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-empsign',
  templateUrl: './empsign.component.html',
  styleUrls: ['./empsign.component.css']
})
export class EmpsignComponent {
  isHovered = false;
  isHovereda =false;
  emailFormemp: FormGroup;

  constructor(private formBuilder: FormBuilder , private router:Router,private readonly authService: UserService) {
    this.emailFormemp = this.formBuilder.group({
      empmail: ['', [Validators.required, Validators.email]]
    });
  }


  ngOnInit(): void {}

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then((userCredential) => {
        // User is successfully authenticated
        const user = userCredential.user;
        console.log('Authenticated');
        console.log('User Info:', user);
        const empmailid = user.email;
        return this.authService.insertemployeremail(empmailid);
      })
      .catch((error) => {
        console.error('Authentication Error:', error);
      });
  }
  

  insertemp(emailFormemp:{value:any;}){
    console.log("Done");
    this.router.navigate(['/employer/empregister']);
    // return this.b1.insertempmailadd(emailFormemp.value).subscribe();
  }
  // signInWithGoogle() {
  //   this.authService.signInWithGoogle();
  // }
}
