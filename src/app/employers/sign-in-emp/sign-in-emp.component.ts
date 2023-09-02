import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';



@Component({
  selector: 'app-sign-in-emp',
  templateUrl: './sign-in-emp.component.html',
  styleUrls: ['./sign-in-emp.component.css']
})
export class SignInEmpComponent {
  isHovered = false;
  isHovereda =false;
  emailFormemp: FormGroup;

  constructor(private formBuilder: FormBuilder ,  private b1:NavbarService , private router:Router) {
    this.emailFormemp = this.formBuilder.group({
      empmail: ['', [Validators.required, Validators.email]]
    });
  }


  insertemp(emailFormemp:{value:any;}){
    console.log("Done");
    this.router.navigate(['/employers/sign-in-checkemp']);
    return this.b1.insertempmailadd(emailFormemp.value).subscribe();
  }
}
