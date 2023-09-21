import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-empmessage',
  templateUrl: './empmessage.component.html',
  styleUrls: ['./empmessage.component.css']
})
export class EmpmessageComponent implements OnInit{




  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more users here...
  ];

  selectedUser: any = null; // Store the selected user

  messages: any[] = [
    // Initialize with some default messages...
  ];
  data: any;


  constructor(private b1:UserService){}


  
  ngOnInit(): void {
    let responce = this.b1.fetchuser();
    responce.subscribe((data1: any)=>this.data=data1);
  }
  // Function to handle user selection
  selectUser(user: any) {
    this.selectedUser = user;
    // Load chat messages for the selected user or implement message loading logic.
  }




}
