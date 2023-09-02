import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-employercompform',
  templateUrl: './employercompform.component.html',
  styleUrls: ['./employercompform.component.css']
})
export class EmployercompformComponent  implements OnInit{


  registeremploy!: FormGroup;

constructor(private router:Router , private b1: NavbarService, private formbuilder:FormBuilder){
  this.registeremploy = this.formbuilder.group({
    companyName: ['', Validators.required],
    employeesRange: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    howHeard: ['']
  });

}




empRegisterSub(registeremploy:{value:any;}){

    this.router.navigate(['employerdashboard/addjobbasics']);
    return this.b1.insertemployeraccount(registeremploy.value).subscribe();
    console.log('Form submitted:', this.registeremploy.value);

}

ngOnInit(): void {

}
signOutEmployer(){
    this.router.navigate(['/employers']);
  }
}
