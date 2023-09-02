import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showNavbar = true;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;

        // Check if the current route is 'employer'
        this.showNavbar = !['/employer', '/sign-in','/employers','/seeker','/seeker/companiesseker','/seeker/salaryseeker','/seeker/messageseeker','/seeker/notificationseeker','/seeker/profileseeker','/employers/findacv','/employers/product','/employers/resources','/employers/helpcenter','/employers/sign-in-emp','/employers/findjobsemp','/seeker/myjobsuser','/seeker/setting','/seeker/helpcenteruser','/seeker/applyjob','/seeker/kapply','/employers/advancesearch','/employers/sign-in-checkemp','/employers/employerform','/employerdashboard','/employerdashboard/dashboardemployer','/employerdashboard/addjobbasics'].includes(currentRoute);    
      }
    });
  }
  signinpage(){
    this.router.navigate(['/sign-in']);
  }
}
