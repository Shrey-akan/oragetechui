import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardemployer',
  templateUrl: './dashboardemployer.component.html',
  styleUrls: ['./dashboardemployer.component.css']
})
export class DashboardemployerComponent {
constructor(private router:Router){ }
  goTopost(){
    this.router.navigate(['/employerdashboard']);
  }
}
