import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';
interface User {
  uid: Number;
  userName: String;
  userFirstName: String;
  userLastName: String;
  userPassword: String;
  companyuser: String;
  websiteuser: String;
  userphone: String;
  usercountry: String;
  userstate: String;
  usercity: String;
}
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: any
  userData1!: User;
  abc: any;
  user: any;
  isOpen: boolean = false;
  active: number = 0;
  constructor(public cookie: CookieService, private router: Router, private b1: UserService) { }

  userID: string = "0"; // Change 'String' to 'string'

  ngOnInit(): void {
    // Check if the userID is correctly retrieved from the cookie
    this.userID = this.cookie.get('user');
    console.log(this.userID);
    console.log('User ID from cookie:', this.userID);

    let response = this.b1.fetchuser();

    response.subscribe((data1: any) => {
      // Debugging: Log the data received from the API
      console.log('Data from API:', data1);
      const uuid = this.userID;
      console.log(uuid);

      // Filter the data array to include only the user with the matching userID
      // this.data = data1.find((user: any) => user.uid === uuid);
      this.userData1 = data1.find((user: any) => user.uid == uuid);
      console.log(this.userData1);
      // Debugging: Log the filtered data
      console.log("hello");
      console.log('Filtered Data:', this.userData1);
      this.abc = this.userData1.userName;
      console.log(this.abc);
    });
  }
  userData: any = {

  };

  openUpdateProfileForm() {
    this.router.navigate(['/dashboarduser/updateprofile', this.userID]);
  }
  deleteAccount() {
    console.log(this.userID);
    // Use this.userID to pass the user's ID for deletion
    this.b1.deleteUser(this.userID).subscribe(
      {
        next: (response: any) => {
          if(response === true) {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    );
  }

  handleActive(id: number) {
    this.active = id;
  }

  handleToggle() {
    this.isOpen = !this.isOpen;
  }
}
