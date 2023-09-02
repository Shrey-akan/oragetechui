import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isHovered = false;
  isHovereda =false;
  emailForm: FormGroup;


  constructor( private formBuilder: FormBuilder , private b1:NavbarService , private router:Router) {
    this.emailForm = this.formBuilder.group({
      usermail: ['', [Validators.required, Validators.email]]
    });
  }


  insertuser(emailForm:{value:any;}){
    console.log("Done");
    this.router.navigate(['/sign-in-confirm']);
    return this.b1.insertusermail(emailForm.value).subscribe();
  }
}
