import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateempprofile',
  templateUrl: './updateempprofile.component.html',
  styleUrls: ['./updateempprofile.component.css']
})
export class UpdateempprofileComponent implements OnInit {
  employeeForm!: FormGroup;
  empId:any;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: UserService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Initialize the form with default values or load existing employee data
    this.employeeForm = this.formBuilder.group({
   
      empfname: ['', Validators.required],
      emplname: ['', Validators.required],
      empcompany: ['', Validators.required],
      emppass: ['', Validators.required],
      empphone: ['', Validators.required],
      empcountry: ['', Validators.required],
      empstate: ['', Validators.required],
      empcity: ['', Validators.required],
      descriptionemp: ['', Validators.required]
    });
    this.empId = this.route.snapshot.paramMap.get('empId');



  }

  updateEmployee() {
    if (this.employeeForm.valid) {
      // Extract updated employee data from the form
      const updatedEmployee = this.employeeForm.value;
      console.log(updatedEmployee);
      this.employeeService.updateEmployee(updatedEmployee)
      .pipe(
        catchError((error) => {
          // Handle the error response here
          console.error('Error updating profile:', error);
          return throwError(error); // Re-throw the error
        })
      )
      .subscribe({
        next: (response) => {
          // Handle the success response here
          console.log('Profile updated successfully:', response);
        },
        complete: () => {
          // This block is optional and can be used for handling completion
        }
      });
  } else {
    console.error('Form is invalid. Cannot update profile.');
  }
  }

}
