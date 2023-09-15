import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empsign',
  templateUrl: './empsign.component.html',
  styleUrls: ['./empsign.component.css']
})
export class EmpsignComponent {
  isHovered = false;
  isHovereda =false;
  emailFormemp: FormGroup;

  constructor(private formBuilder: FormBuilder , private router:Router) {
    this.emailFormemp = this.formBuilder.group({
      empmail: ['', [Validators.required, Validators.email]]
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
