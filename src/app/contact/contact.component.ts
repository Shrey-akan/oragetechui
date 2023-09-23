import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 // Define a FormGroup for your form
 contactForm!: FormGroup;

 constructor(private fb: FormBuilder,private router:Router,private h1:UserService) {
   // Initialize the form with FormBuilder
   this.contactForm = this.fb.group({
     name: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     contactNumber: ['', Validators.required],
     message: ['', Validators.required]
   });
 }

 // Handle form submission
 onSubmit() {
   if (this.contactForm.valid) {
     // Form data is valid, you can access it using this.contactForm.value
     console.log(this.contactForm.value);
     this.h1.contactform(this.contactForm);
   }
 }
}
