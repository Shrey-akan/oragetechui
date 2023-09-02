import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardformheader',
  templateUrl: './dashboardformheader.component.html',
  styleUrls: ['./dashboardformheader.component.css']
})
export class DASHBOARDFORMHEADERComponent {

  constructor(private router:Router){ }
  signOutEmployer(){
    this.router.navigate(['/employers']);
  }
}
