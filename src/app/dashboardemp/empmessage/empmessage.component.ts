import { Component } from '@angular/core';

@Component({
  selector: 'app-empmessage',
  templateUrl: './empmessage.component.html',
  styleUrls: ['./empmessage.component.css']
})
export class EmpmessageComponent {
  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more users here...
  ];

  selectedUser: any = null; // Store the selected user

  messages: any[] = [
    // Initialize with some default messages...
  ];

  // Function to handle user selection
  selectUser(user: any) {
    this.selectedUser = user;
    // Load chat messages for the selected user or implement message loading logic.
  }
}
