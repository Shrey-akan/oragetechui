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
  user: any;
  messages: any[] = [];
  incoming_id!: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private chatService: OtpService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.incoming_id = params['id'];
    //   this.userService.getUser(this.incoming_id).subscribe(user => {
    //     this.user = user;
    //   });
    // });
  }

  sendMessage(message: string): void {
    // this.chatService.sendMessage(this.incoming_id, message).subscribe(response => {
    //   // Handle response or update messages array
    // });
  }
}
