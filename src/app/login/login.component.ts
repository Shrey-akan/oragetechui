import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  passwordVisible: boolean = false;
  constructor(private fb: FormBuilder, private router:Router , private b1:UserService, private userservice:UserService) {
      }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/.+@gmail\.com$/)]],
      userPassword: ['', Validators.required],
    });
  }

  public login(loginform:{value:any;}) {
   
   return this.b1.logincheck(loginform.value);

  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  loginWithGoogle() {
    this.userservice
      .loginWithGoogle()
      .then((userCredential) => {
        // User is successfully authenticated
        const user = userCredential.user;
        console.log('Authenticated');
        console.log('User Info:', user);
        const userName = user.email;
        console.log(userName);
        //  this.userservice.insertusermailgog(userName);
      })
      .catch((error) => {
        console.error('Authentication Error:', error);
      });
  }
}
