import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit{



  constructor(private b1:UserService){

  }
  jobList: any[] = [
    {
      jobid: 1,
      jobtitle: 'Software Developer',
      companyforthisjob: 'ABC Inc.',
      numberofopening: 3,
      locationjob: 'New York',
      jobtype: 'Full-Time',
      schedulejob: '9:00 AM - 5:00 PM',
      payjob: 80000,
      payjobsup: 100000,
      descriptiondata: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // Add more job listings here...
  ];
  ngOnInit(): void {
  //  let responce = this.b1.viewcart();
  //   responce.subscribe((data1: any)=>this.data=data1);    
  }

}
