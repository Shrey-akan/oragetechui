import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-addjobbasics',
  templateUrl: './addjobbasics.component.html',
  styleUrls: ['./addjobbasics.component.css']
})
export class AddjobbasicsComponent {
  jobdetail: FormGroup;


  constructor(private router:Router , private b1: NavbarService, private formbuilder:FormBuilder){
    this.jobdetail = this.formbuilder.group({
      jobtitle: ['', Validators.required],
      companyforthisjob: ['', Validators.required],
      numberofopening: ['', Validators.required],
      locationjob: ['', Validators.required],
      jobtype: ['', Validators.required],
      schedulejob: ['', Validators.required],
      payjob: ['', Validators.required],
      payjobsup: ['', Validators.required],
      descriptiondata: ['']
    });
    
  }



  jobdetailsform(jobdetail:{value:any;}){
    this.router.navigate(['/employerdashboard/dashboardemployer']);
    return this.b1.jobpostinsert(jobdetail.value).subscribe();
    console.log(jobdetail.value);
 
  }



  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };


  @ViewChild('editorContent') editorContent!: ElementRef;

  applyCommand(command: string): void {
    document.execCommand(command, false, ''); // Use empty string instead of null
  }



}
