import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-kapply',
  templateUrl: './kapply.component.html',
  styleUrls: ['./kapply.component.css']
})
export class KapplyComponent implements OnInit{
  data: any;
  constructor(private b1:NavbarService){ }
  ngOnInit(): void {
    let responce = this.b1.viewformuser();
    responce.subscribe((data1: any)=>this.data=data1);
  }



}
