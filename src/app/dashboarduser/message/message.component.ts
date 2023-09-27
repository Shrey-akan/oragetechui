import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OtpService } from 'src/app/auth/otp.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
selectedUser: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  messages: any[] = [];
  newMessage: string = '';

  sendMessage() {
    // In a real application, you would send the message to the selected user
    // and update the messages array with the sent message
    if (this.newMessage) {
      this.messages.push({ text: this.newMessage, sender: 'You' });
      this.newMessage = '';
    }
  }
}
