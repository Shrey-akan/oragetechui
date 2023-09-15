import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  myForm!: FormGroup;
  adminId = 'admin@orage.com';
  adminPassword = 'admin123';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: false
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      if (formData.email === this.adminId && formData.password === this.adminPassword) {
        // Redirect to the dashboard
        this.router.navigate(['/admin/dashboardadmin']);
      } else {
        // Redirect to the login admin page
        this.router.navigate(['/admin']);
      }
    }
  }

}
