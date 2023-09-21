import { Component } from '@angular/core';

@Component({
  selector: 'app-checkotp',
  templateUrl: './checkotp.component.html',
  styleUrls: ['./checkotp.component.css']
})
export class CheckotpComponent {
  otp: string = '';

  verifyOTP() {
    console.log('OTP Entered:', this.otp);
    // Add your OTP verification logic here
  }
}
