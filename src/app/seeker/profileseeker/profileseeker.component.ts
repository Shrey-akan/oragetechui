import { Component } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-profileseeker',
  templateUrl: './profileseeker.component.html',
  styleUrls: ['./profileseeker.component.css']
})
export class ProfileseekerComponent{
  data: any;



  constructor(private b1:NavbarService){}

  ngOnInit(): void {
    let responce = this.b1.viewuserdetailservice();
    responce.subscribe((data1: any)=>this.data=data1);
  }


}
