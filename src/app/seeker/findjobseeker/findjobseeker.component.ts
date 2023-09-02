import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

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
  selector: 'app-findjobseeker',
  templateUrl: './findjobseeker.component.html',
  styleUrls: ['./findjobseeker.component.css']
})
export class FindjobseekerComponent {

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
    let responce = this.b1.viewjobpostdet();
    responce.subscribe((data1: any)=>this.data=data1);
  }


  navigateToSignIn() {
    // Replace 'sign-in' with the actual route name of your sign-in page
    this.router.navigate(['seeker/applyjob']);
  }
}
