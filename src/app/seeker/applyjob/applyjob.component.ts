import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {
  myformsubmission!: FormGroup; // Initialize with an empty group
  currentStep = 1;
  // router: any;
  data: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private b1:NavbarService) { }


  // handleResumeUpload(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Perform any necessary operations with the uploaded file here
  //     console.log('Uploaded file:', file);
  //     // You can store the file or its data in your form as needed
  //     this.multiStepForm.get('step1')?.patchValue({
  //       juresume: file
  //     });
  //   }
  // }

  ngOnInit(): void {

    let responce = this.b1.empaccregrepo();
    responce.subscribe((data1: any)=>this.data=data1);
    this.myformsubmission = this.formBuilder.group({
  
        juname: ['', Validators.required],
        juresume: [''],
      
    
        jurelocation: ['', [Validators.required]],
        jueducation: ['', Validators.required],
        juexperience: ['', Validators.required],
        juexpinjava: ['', Validators.required],
        juexpjsp: ['', Validators.required],
        juinterviewdate: [''],
        jujavavalid: ['', Validators.required],
      
     
        jujobtitle: ['', Validators.required],
        jucompanyname: ['', Validators.required]
      })
      // Add more steps as needed
  

  }


  insertUserForma(myformsubmission:{value:any;}){
    console.log("Done");
    this.router.navigate(['seeker/kapply']);
    return this.b1.insertuserform(myformsubmission.value).subscribe();
  }
  nextStep() {

    this.currentStep++;

  }

  prevStep() {
    this.currentStep--;
  }



}