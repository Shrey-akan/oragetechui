import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {
  companyForm: FormGroup;

  @Output() formSubmitted = new EventEmitter<{ companyName: string; email: string }>();

  constructor(private formBuilder: FormBuilder) {
    this.companyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.companyForm.valid) {
      const formData = {
        companyName: this.companyForm.value.companyName,
        email: this.companyForm.value.email
      };
      this.formSubmitted.emit(formData);
    }
    else{
      console.log("Error");
    }
  }
}
