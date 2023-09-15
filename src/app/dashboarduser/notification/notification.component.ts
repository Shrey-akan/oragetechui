import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  data: any;

  show() {
    // Add your show logic here
    console.log('Show button clicked');
    // You can perform any actions you need when the button is clicked
  }

  notificationData = {
    heading: 'Sample Heading',
    subHeading: 'Sample Subheading',
    desc: 'This is a sample description for the notification card.'
  };
}
