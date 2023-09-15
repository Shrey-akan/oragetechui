import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  notificationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.notificationForm = this.formBuilder.group({
     
      nhead: ['', Validators.required],
      nsubhead: [''],
      ndescription: [''],
      notisend: ['', Validators.required]
    });
  }

  shareNotification() {
    if (this.notificationForm.valid) {
      // Form is valid, you can access the form values like this:
      const formData = this.notificationForm.value;
      console.log('Notification shared:', formData);
  
      // Send the data to the service and handle the response
      this.userService.insertnotification(formData);
        // (response) => {
        //   // Handle the response here, if needed
        //   console.log('Response from service:', response);
        // },
        // (error) => {
        //   // Handle errors here, if needed
        //   console.error('Error from service:', error);
        // }
      
    }
  }
  
}
