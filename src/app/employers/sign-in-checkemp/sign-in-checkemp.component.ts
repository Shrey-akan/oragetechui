import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-sign-in-checkemp',
  templateUrl: './sign-in-checkemp.component.html',
  styleUrls: ['./sign-in-checkemp.component.css']
})
export class SignInCheckempComponent {
  isHovered = false;
  employerdetails: FormGroup;
  formSubmitted: any;
  empsignin:FormGroup;
  data1: any;


  constructor(private formBuilder: FormBuilder , private b1:NavbarService , private router:Router) {
    this.employerdetails = this.formBuilder.group({
      empfname: ['', Validators.required],
      emplname: ['', Validators.required],
      empmailid: ['', [Validators.required, Validators.email]],
      emppass:['',Validators.required],
      empcompany: [''],
      descriptionemp: [''],
      empphone: ['', Validators.required],
      empcountry: ['', Validators.required],
      empstate: ['', Validators.required],
      empcity: ['', Validators.required]
    });

  this.empsignin = this.formBuilder.group({
    empmailid1:['',[Validators.required, Validators.email]],
    emppass1:['',Validators.required]
  });

  }

  empRegisteration(employerdetails:{value:any;}){
    
    this.router.navigate(['/employerdashboard/']);
    
    return this.b1.insertempdetail(employerdetails.value).subscribe();
  }


  ngOnInit(): void {
    let responce = this.b1.viewemployerdetailservice();
    responce.subscribe((data11: any)=>this.data1=data11);
  }

    //  // user LOGIN CHECK
    //  islogin:any;
    //  userLogin(username:any,password:any){
    //   this.islogin=(username=='admin' && password=='12345');
    //   console.log(this.islogin);
    //   localStorage.setItem("islogin",this.islogin?"true":"false");
    //   console.log(this.islogin);
    //   return (this.islogin);
    // }
    
  empCheckInfo(empsignin:{value:any;}){
  
    const empemail = empsignin.value.empmailid1;
    const emppassword = empsignin.value.emppass1;
  
    const empmatch = this.data1.find((data1: any) => data1.empmailid === empemail && data1.emppass === emppassword );

    if (empmatch) {
      this.router.navigate(['/employerdashboard/']);
      console.log(empsignin.value);
    } else {
      console.log(empsignin.value);
      console.log("Invalid login");
      alert("Invalid Details");
      // Optionally, show an error message to the user
    }
    
  }
}
