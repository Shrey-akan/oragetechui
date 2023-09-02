import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
@Component({
  selector: 'app-sign-in-confirm',
  templateUrl: './sign-in-confirm.component.html',
  styleUrls: ['./sign-in-confirm.component.css']
})
export class SignInConfirmComponent {
  isHovered = false;
  userregister: FormGroup;
  formSubmitted: any;
  usersignin:FormGroup;
  data: any;


  constructor(private formBuilder: FormBuilder , private b1:NavbarService , private router:Router) {
    this.userregister = this.formBuilder.group({
      fnameuser: ['', Validators.required],
      lnameuser: ['', Validators.required],
      emailuser: ['', [Validators.required, Validators.email]],
      passuser:['',Validators.required],
      companyuser: [''],
      websiteuser: [''],
      userphone: ['', Validators.required],
      usercountry: ['', Validators.required],
      userstate: ['', Validators.required],
      usercity: ['', Validators.required]
    });

  this.usersignin = this.formBuilder.group({
    emailuserc:['',Validators.required],
    passuserc:['',Validators.required]
  });

  }

  userRegisteration(userregister:{value:any;}){
    
    this.router.navigate(['/seeker']);
    
    return this.b1.insertuserdetail(userregister.value).subscribe();
  }


  ngOnInit(): void {
    let responce = this.b1.viewuserdetailservice();
    responce.subscribe((data1: any)=>this.data=data1);
  }

    // 
    //  islogin:any;
    //  userLogin(username:any,password:any){
    //   this.islogin=(username=='admin' && password=='12345');
    //   console.log(this.islogin);
    //   localStorage.setItem("islogin",this.islogin?"true":"false");
    //   console.log(this.islogin);
    //   return (this.islogin);
    // }
    
    login(usersignin:{value:any;}) {
      const empemail = usersignin.value.emailuserc;
      const emppassword = usersignin.value.passuserc;
    
      const empmatch = this.data.find((data1: any) => data1.emailuser === empemail && data1.passuser === emppassword );
  
      if (empmatch) {
        this.router.navigate(['/seeker/']);
        console.log(usersignin.value);
      } else {
        console.log(usersignin.value);
        console.log("Invalid login");
        alert("Invalid Details");
        // Optionally, show an error message to the user
      }
    }

}
