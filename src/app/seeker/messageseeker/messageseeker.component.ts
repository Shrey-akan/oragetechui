import { Component } from '@angular/core';

@Component({
  selector: 'app-messageseeker',
  templateUrl: './messageseeker.component.html',
  styleUrls: ['./messageseeker.component.css']
})
export class MessageseekerComponent {
  messages: { content: string; incoming: boolean; time: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        content: this.newMessage,
        incoming: false,
        time: new Date().toLocaleTimeString(),
      });

      // Simulate a reply from the contact (replace with actual logic)
      setTimeout(() => {
        this.messages.push({
          content: 'Hello! This is a reply from the contact.',
          incoming: true,
          time: new Date().toLocaleTimeString(),
        });
      }, 1000);

      this.newMessage = '';
    }
  }
}

