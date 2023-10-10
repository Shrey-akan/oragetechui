import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {
  jobForm!: FormGroup;
  jobid!: string | null;

  constructor(
    private fb: FormBuilder ,
    private route: ActivatedRoute ,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobid: [''], 
      jobtitle: ['', Validators.required],
      companyforthisjob: ['', Validators.required],
      numberofopening: ['', Validators.required],
      locationjob: ['', Validators.required],
      jobtype: ['', Validators.required],
      schedulejob: ['', Validators.required],
      payjob: ['', Validators.required],
      payjobsup: ['', Validators.required],
      descriptiondata: ['', Validators.required]
    });
  }

  updateJob() {
    this.jobid = this.route.snapshot.paramMap.get("jobid");
    console.log("jobid:", this.jobid); 
    const formData = this.jobForm.value;

    // Use HttpClient to send the form data to your backend API
    this.http.put('http://localhost:9001/updatejob', formData)
      .subscribe(
        response => {
          console.log('Job updated successfully', response);
          // Handle success (e.g., show a success message)
        },
        error => {
          console.error('Error updating job', error);
          // Handle error (e.g., show an error message)
        }
      );
  }

}
