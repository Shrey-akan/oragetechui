import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haderseeker',
  templateUrl: './haderseeker.component.html',
  styleUrls: ['./haderseeker.component.css']
})
export class HaderseekerComponent implements OnInit{
  userEmail!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the email from the query parameters
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
  }
}
