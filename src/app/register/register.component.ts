import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isHovered = false;
  userregister!: FormGroup;
  formSubmitted: any;
 
  data: any;


  constructor(private formBuilder: FormBuilder , private router:Router , private userservice:UserService, private http:HttpClient) {
  }




  ngOnInit(): void {
    this.userregister = this.formBuilder.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      userPassword:['',Validators.required],
      companyuser: [''],
      websiteuser: [''],
      userphone: ['', Validators.required],
      usercountry: ['', Validators.required],
      userstate: ['', Validators.required],
      usercity: ['', Validators.required]
    });
    // let responce = this.b1.viewuserdetailservice();
    // responce.subscribe((data1: any)=>this.data=data1);


   
  }

  loginWithGoogle() {
    this.userservice
      .loginWithGoogle()
      .then((userCredential) => {
        // User is successfully authenticated
        const user = userCredential.user;
        console.log('Authenticated');
        console.log('User Info:', user);
        const userName = user.email;
        console.log(userName);
        //  this.userservice.insertusermailgog(userName);
      })
      .catch((error) => {
        console.error('Authentication Error:', error);
      });
  }

  





  // userRegisteration(userregister:{value:any;}){
  //   this.router.navigate(['/login']);
  //   console.log(this.userregister);
  //   return this.userservice.insertusermail(userregister.value);

  // }
  userRegisteration(): void {
    this.http.post('https://job4jobless.com:9001/insertusermail', this.userregister.getRawValue()).subscribe({
      next: (payload: any) => {
      
          console.log(payload);
          console.log(payload.uid);
          this.generateOtp(payload);
        
      },
      error: (err) => {
        console.error(`Some error occured: ${err}`);
      }
    })
  }

  generateOtp(payload: any) {
    this.http.post('https://otpservice.onrender.com/0auth/generateOtp', {uid: payload.uid, email:payload.userName}).subscribe({
      next:(response: any) => {
        if(response.otpCreated) {
          console.log(response.otpCreated);

this.router.navigate(['/checkotp', payload.uid]);
          // this.router.navigate(['/checkotp/', response.uid]);
        }
        else {
          console.error("Otp not generated");
        }
      },
      error: (err) => { 
        console.error(`Some error occured: ${err}`);
      }
    })
  }

    
    //  islogin:any;
    //  userLogin(username:any,password:any){
    //   this.islogin=(username=='admin' && password=='12345');
    //   console.log(this.islogin);
    //   localStorage.setItem("islogin",this.islogin?"true":"false");
    //   console.log(this.islogin);
    //   return (this.islogin);
    // }
    
    login(usersignin:{value:any;}) {
      const empemail = usersignin.value.userNamec;
      const emppassword = usersignin.value.passuserc;
    
      const empmatch = this.data.find((data1: any) => data1.userName === empemail && data1.passuser === emppassword );
  
      if (empmatch) {
        this.router.navigate(['/seeker/']);
        console.log(usersignin.value);
      } else {
        console.log(usersignin.value);
        console.log("Invalid login");
        alert("Invalid Details");
        // Optionally, show an error message to the user
      }
    }
}
function loginWithGoogle() {
  throw new Error('Function not implemented.');
}

