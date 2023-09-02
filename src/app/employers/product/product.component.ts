import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  contactForma: FormGroup;
  formSubmitted: any;
  companyswitch: FormGroup;
  data: any;
 

  constructor(private formBuilder: FormBuilder , private router:Router , private b1:NavbarService) {
    this.contactForma = this.formBuilder.group({
      contacthelp: ['', Validators.required],
      contactname: ['', Validators.required],
     
      contactmail: ['', [Validators.required, Validators.email]],
      contactcompany: ['', Validators.required],
     
      contactphone: ['', Validators.required]
     

      
    });
    this.companyswitch = this.formBuilder.group({
      companyName: ['', Validators.required],
      empemail: ['', [Validators.required, Validators.email]],
      emppass:['']
    });
  }



  ngOnInit(): void {
    let responce = this.b1.viewemployerdetailservice();
    responce.subscribe((data1:any)=>this.data=data1);
    const showPostJobButtonscom = document.getElementsByClassName('contactform');
    const popupDialogContact = document.getElementById('popupDialogContact');
    const closeButtonContact = document.getElementById('closeButtonContact');

    if (popupDialogContact && closeButtonContact) {
        for (let i = 0; i < showPostJobButtonscom.length; i++) {
            const showPostJobButton = showPostJobButtonscom[i] as HTMLElement;
            showPostJobButton.addEventListener('click', () => {
                popupDialogContact.style.display = 'block';
            });
        }

        closeButtonContact.addEventListener('click', () => {
            popupDialogContact.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popupDialogContact) {
                popupDialogContact.style.display = 'none';
            }
        });
    }
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






contactdetailsemp(contactForma:{value:any;}) {
  this.router.navigate(['/employers/']);
    console.log(contactForma.value);
  return this.b1.insertcontactempl(contactForma.value).subscribe();
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
