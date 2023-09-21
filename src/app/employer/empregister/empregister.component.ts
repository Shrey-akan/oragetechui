import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent {
  isHovered = false;
  employerdetails: FormGroup;
  formSubmitted: any;
  empsignin!:FormGroup;
  data1: any;


  constructor(private formBuilder: FormBuilder , private router:Router , private b1:UserService) {
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

 

  }

  empRegisteration(employerdetails:{value:any;}){
    
    this.router.navigate(['/employer/empsign']);
    
    return this.b1.insertemployer(employerdetails.value);
  }


  ngOnInit(): void {
    // let responce = this.b1.viewemployerdetailservice();
    // responce.subscribe((data11: any)=>this.data1=data11);
    this.empsignin = this.formBuilder.group({
      empmailid:['',[Validators.required, Validators.email]],
      emppass:['',Validators.required]
    });
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
    
  empCheckInfo(){
  
console.log(this.empsignin.getRawValue());
    return this.b1.logincheckemp(this.empsignin.getRawValue());
    
  }
}
