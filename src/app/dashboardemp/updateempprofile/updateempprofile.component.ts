import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-updateempprofile',
  templateUrl: './updateempprofile.component.html',
  styleUrls: ['./updateempprofile.component.css']
})
export class UpdateempprofileComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: UserService
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
  }

  updateEmployee() {
    if (this.employeeForm.valid) {
      // Extract updated employee data from the form
      const updatedEmployee = this.employeeForm.value;

      // Pass the updated employee data to your service to update the profile
      this.employeeService.updateEmployee(updatedEmployee);
    }
  }

}
