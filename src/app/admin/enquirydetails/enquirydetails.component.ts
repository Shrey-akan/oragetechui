import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-enquirydetails',
  templateUrl: './enquirydetails.component.html',
  styleUrls: ['./enquirydetails.component.css']
})
export class EnquirydetailsComponent implements OnInit{
  
  data:any;

  constructor(private b1:UserService) { }
  
  ngOnInit(): void {
    let responce = this.b1.fetchcontact();
    responce.subscribe((data1: any)=>this.data=data1);    
  }

}
