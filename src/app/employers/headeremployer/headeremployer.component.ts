import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-headeremployer',
  templateUrl: './headeremployer.component.html',
  styleUrls: ['./headeremployer.component.css']
})
export class HeaderemployerComponent implements OnInit{
  showNavbaremp= true;
  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;

        // Check if the current route is 'employer'
        this.showNavbaremp = !['/employers/sign-in-checkemp'].includes(currentRoute);    
      }
    });
  }
}
