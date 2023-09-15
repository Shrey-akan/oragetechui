import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  users = [
    { id: 1, name: 'Employer 1' },
    { id: 2, name: 'Employer 2' },
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
