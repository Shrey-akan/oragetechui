import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';


@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.css']
})
export class PostajobComponent implements OnInit{


  companyswitch: FormGroup;
  formSubmitted: any;
  data: any;


  constructor(private formBuilder: FormBuilder , private b1:NavbarService , private router:Router) {
    this.companyswitch = this.formBuilder.group({
      companyName: ['', Validators.required],
      empemail: ['', [Validators.required, Validators.email]],
      emppass:['']
    });
  }



  ngOnInit(): void {
    let responce = this.b1.viewemployerdetailservice();
    responce.subscribe((data1:any)=>this.data=data1);
    const showPostJobButtons = document.getElementsByClassName('showPostJob');
    const popupDialogJob = document.getElementById('popupDialogJob');
    const closeButtonJob = document.getElementById('closeButtonJob');

    if (popupDialogJob && closeButtonJob) {
        for (let i = 0; i < showPostJobButtons.length; i++) {
            const showPostJobButton = showPostJobButtons[i] as HTMLElement;
            showPostJobButton.addEventListener('click', () => {
                popupDialogJob.style.display = 'block';
            });
        }

        closeButtonJob.addEventListener('click', () => {
            popupDialogJob.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popupDialogJob) {
                popupDialogJob.style.display = 'none';
            }
        });
    }

}


switchtoemployer(companyswitch:{value:any;}){
  const empem = companyswitch.value.companyName;
  const empemail = companyswitch.value.empemail;
  const emppassword = companyswitch.value.emppass;

  const checkemp = this.data.find((data: any)=> data.empcompany === empem &&  data.empmailid === empemail && data.emppass === emppassword );
  if(checkemp){
    this.router.navigate(['/employerdashboard/']);
    console.log("Done");
    console.log(companyswitch.value);
  }
  else{
    alert("Invalid Credentials");
  }
}
}
