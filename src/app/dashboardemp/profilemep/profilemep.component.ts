import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';

interface Employer {
  empid: Number;
  empfname: String;
  emplname: String;
  empcompany: String;
  empmailid: String;
  emppass: String;
  empphone: String;
  empcountry: String;
  empstate: String;
  empcity: String;
  descriptionemp: String;
}

@Component({
  selector: 'app-profilemep',
  templateUrl: './profilemep.component.html',
  styleUrls: ['./profilemep.component.css']
})
export class ProfilemepComponent implements OnInit {

  data:any
  empDetail!: Employer;
  abc:any;
  emp: any;
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
  }
  updateEmployee(employee: any) {
    // Implement the logic to update the employee (e.g., open a modal or navigate to an update page)
    console.log('Update employee:', employee);
  }
  

  }


