import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit{
  data: any;
  empDetail: any;
  abc: any;



  constructor(public cookie:CookieService , private b1:UserService) {}
  
  empId: String = "0";

  ngOnInit(): void {
    this.empId = this.cookie.get('emp');

    console.log(this.empId);
    console.log('Employer ID from cookie:', this.empId);
      let response = this.b1.fetchemployer();
      response.subscribe((data1: any) => {
        // Debugging: Log the data received from the API
        console.log('Data from API:', data1);
        const eeid=this.empId;
        console.log(eeid);
        
        // Filter the data array to include only the user with the matching userID
        // this.data = data1.find((user: any) => user.uid === uuid);
        this.empDetail = data1.find((emp: any) => emp.empid == eeid);
        console.log(this.empDetail);
        // Debugging: Log the filtered data
        console.log("hello");
        console.log('Filtered Data:', this.empDetail);
        this.abc = this.empDetail.empmailid;
        console.log(this.abc);
      });

      
    let responce = this.b1.fetchjobpost();
      responce.subscribe((data1: any)=>this.data=data1);  
      
    
  }

}
