import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserauthService } from 'src/app/service/userauth.service';

@Component({
  selector: 'app-haderseeker',
  templateUrl: './haderseeker.component.html',
  styleUrls: ['./haderseeker.component.css']
})
export class HaderseekerComponent implements OnInit{
  userEmail!: string;
  
  constructor(private route: ActivatedRoute , private router:Router , private userauth:UserauthService) {}

  ngOnInit() {
    // Retrieve the email from the query parameters
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
  }
  public logout(){
    this.userauth.clear();
    this.router.navigate(['/']); 
  }
}
