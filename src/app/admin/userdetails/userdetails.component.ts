import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  data : any;

  constructor(private b1:UserService){}
  ngOnInit(): void {
    let responce = this.b1.fetchuser();
    responce.subscribe((data1: any)=>this.data=data1);    
  }

}
