import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit{
  jobdetail: FormGroup;
  empDetail: any;
  abc: any;
  logval: any;
  constructor(private router:Router, private formbuilder:FormBuilder,private b1:UserService , public cookie:CookieService){
    this.jobdetail = this.formbuilder.group({
      jobtitle: ['', Validators.required],
      companyforthisjob: ['', Validators.required],
      numberofopening: ['', Validators.required],
      locationjob: ['', Validators.required],
      jobtype: ['', Validators.required],
      schedulejob: ['', Validators.required],
      payjob: ['', Validators.required],
      payjobsup: ['', Validators.required],
      descriptiondata: [''],
      empmailid:['']
    });
   
  }

  empId: String = "0";

  ngOnInit(): void {
    this.empId = this.cookie.get('emp');

    console.log(this.empId);
    console.log('Employer ID from cookie:', this.empId);
      let response = this.b1.fetchemployer();
      response.subscribe((data1: any) => {
        // Debugging: Log the data received from the API
        console.log('Data from API:', data1);
        const eeid=this.empId;
        console.log(eeid);
        
        // Filter the data array to include only the user with the matching userID
        // this.data = data1.find((user: any) => user.uid === uuid);
        this.empDetail = data1.find((emp: any) => emp.empid == eeid);
        console.log(this.empDetail);
        // Debugging: Log the filtered data
        console.log("hello");
        console.log('Filtered Data:', this.empDetail);
        this.abc = this.empDetail.empmailid;
        const logval=this.abc;
        console.log(this.abc);
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
