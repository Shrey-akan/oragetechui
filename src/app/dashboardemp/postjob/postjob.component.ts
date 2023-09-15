import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent {
  jobdetail: FormGroup;


  constructor(private router:Router, private formbuilder:FormBuilder,private b1:UserService){
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
    this.router.navigate(['/dashboardemp/alljobs']);
    return this.b1.jobpostinsert(jobdetail.value);
    console.log(jobdetail.value);
 
  }



  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
   
  // };


  // @ViewChild('editorContent') editorContent!: ElementRef;

  applyCommand(command: string): void {
    document.execCommand(command, false, ''); // Use empty string instead of null
  }

}
