import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserauthService } from '../service/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private fb: FormBuilder, private authService: UserService, private userauth:UserauthService) {
      }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  login() {
    if (this.loginform.valid) {
      const formData = this.loginform.getRawValue();
      this.authService.login(formData);
    } else {
      // Handle form validation errors here if needed
      console.log("Some weird error occured boiii")
    }
  }
}
