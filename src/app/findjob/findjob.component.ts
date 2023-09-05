import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';


interface Job {
  jobtitle: string;
  companyforthisjob: string;
  numberofopening: string;
  locationjob: string;
  descriptiondata: string[];
  jobtype: string;
  schedulejob: string;
  payjob: string;
  payjobsup: string;
}
@Component({
  selector: 'app-findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.css']
})
export class FindjobsComponent implements OnInit{



  showJobFeed = false;
  showJobSearches = false;
  selectedJob: Job | null = null;
  data: Job[] = [];

  showContainer(containerId: string): void {
    this.showJobFeed = false;
    this.showJobSearches = false;

    if (containerId === 'jbfeed') {
      this.showJobFeed = true;
    } else if (containerId === 'showsearches') {
      this.showJobSearches = true;
    }
  }
  constructor(private router: Router , private b1:NavbarService) {}

  selectJob(data: Job): void {
    this.selectedJob = data;
  }


  ngOnInit(): void {
    // let responce = this.b1.viewjobpostdet();
    // responce.subscribe((data1: any)=>this.data=data1);
  }

  navigateToSignIn() {
    // Replace 'sign-in' with the actual route name of your sign-in page
    this.router.navigate(['/sign-in']);
  }




}
