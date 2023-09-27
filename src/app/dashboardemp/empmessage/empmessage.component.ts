import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { UserService } from 'src/app/auth/user.service';
import { CookieService } from 'ngx-cookie-service';

class Message {
  from: string;
  to: string;
  message: string;

  constructor(from: string, to: string, message: string) {
    this.from = from;
    this.to = to;
    this.message = message;
  }
}

@Component({
  selector: 'app-empmessage',
  templateUrl: './empmessage.component.html',
  styleUrls: ['./empmessage.component.css']
})
export class EmpmessageComponent implements OnInit {
  userName: string = 'User Name';
  messages: any[] = [];
  newMessage: string = '';

  chatEmail: string = '';
  empId!: string;
  empDetail: any;
  abc: any;


  constructor(
    private route: ActivatedRoute,
    private cookie:CookieService,
    private b1:UserService,
    private http: HttpClient // Inject HttpClient
  ) {
    this.route.params.subscribe(params => {
      this.chatEmail = params['email'];
    });
  }

  ngOnInit(): void {
    this.empId = this.cookie.get('emp');

    console.log(this.empId);
    console.log('Employer ID from cookie:', this.empId);
    let response = this.b1.fetchemployer();
  
    response.subscribe((data1: any) => {
      // Debugging: Log the data received from the API
      console.log('Data from API:', data1);
      const eeid=this.empId;
      console.log(eeid);
      
      // Filter the data array to include only the user with the matching userID
      // this.data = data1.find((user: any) => user.uid === uuid);
      this.empDetail = data1.find((emp: any) => emp.empid == eeid);
      console.log(this.empDetail);
      // Debugging: Log the filtered data
      console.log("hello");
      console.log('Filtered Data:', this.empDetail);
      this.abc = this.empDetail.empmailid;
      console.log(this.abc);
    });

  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Create a Message object with 'from', 'to', and 'message' properties
      const messageToSend = new Message(this.abc, this.chatEmail, this.newMessage);

      // Make an HTTP POST request to send the message
      this.http.post('https://chat-1nf0.onrender.com/0notif/sendMsg', messageToSend)
        .subscribe({
          next: (response: any) => {
            // Handle the response from the API, e.g., update UI or show a confirmation message
            console.log('Message sent successfully:', response);

            // Add the new message to the local messages array
            this.messages.push({ text: this.newMessage, from: 'You' });

            // Clear the input field
            this.newMessage = '';
          },
          error: (error: any) => {
            // Handle any errors that occur during the HTTP request
            console.error('Error sending message:', error);
          }
        });
    }
  }

  deleteMessage(message: any) {
    // Remove the message from the messages array
    const index = this.messages.indexOf(message);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

  refreshMessages() {
    // Implement your logic to refresh messages here, e.g., fetching messages from a server
  }
}
