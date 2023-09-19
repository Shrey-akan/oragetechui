import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {
  @Input() userData: any; // Pass the user data to the form
  @Output() saveProfile = new EventEmitter<any>();
  isUpdateProfileFormOpen: boolean = false;
  updatedUser: any = {};

  openUpdateProfileForm() {
    this.updatedUser = { ...this.userData }; // Initialize form with user data
    this.isUpdateProfileFormOpen = true;
  }

  closeUpdateProfileForm() {
    this.isUpdateProfileFormOpen = false;
  }

  updateProfile() {
    // Send updatedUser to the parent component to save
    this.saveProfile.emit(this.updatedUser);
    this.closeUpdateProfileForm();
  }
}
