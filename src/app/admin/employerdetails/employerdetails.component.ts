import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-employerdetails',
  templateUrl: './employerdetails.component.html',
  styleUrls: ['./employerdetails.component.css']
})
export class EmployerdetailsComponent implements OnInit{
  
  data:any;

  constructor(private b1:UserService) { }
  
  ngOnInit(): void {
    let responce = this.b1.fetchemployer();
    responce.subscribe((data1: any)=>this.data=data1);    
  }

}
