import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findacv',
  templateUrl: './findacv.component.html',
  styleUrls: ['./findacv.component.css']
})
export class FindacvComponent{

constructor(private router:Router){}

  showPage(){
    this.router.navigate(['/employers/advancesearch']);
  }
  goToSignIn(){
    this.router.navigate(['/employers/sign-in-emp']);
  }
}
