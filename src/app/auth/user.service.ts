import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
interface User {
  uid: Number;
  userName: String;
  userFirstName: String;
  userLastName: String;
  userPassword: String;
  companyuser: String;
  websiteuser: String;
  userphone: String;
  usercountry: String;
  userstate: String;
  usercity: String;
}
interface Employer {
  empid: Number;
  empfname: String;
  emplname: String;
  empcompany: String;
  empmailid: String;
  emppass: String;
  empphone: String;
  empcountry: String;
  empstate: String;
  empcity: String;
  descriptionemp: String;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(incoming_id: string) {
    throw new Error('Method not implemented.');
  }
 



  private jobTitleSource = new BehaviorSubject<string | null>(null);
  private companyNameSource = new BehaviorSubject<string | null>(null);


  jobTitle$ = this.jobTitleSource.asObservable();
  companyName$ = this.companyNameSource.asObservable();

  setJobTitle(jobTitle: string) {
    this.jobTitleSource.next(jobTitle);
  }
  
  setCompanyName(companyName: string) {
    this.companyNameSource.next(companyName);
  }

      Path_of_api = "https://job4jobless.com/";




      //contact form
      contactformurl ="https://job4jobless.com:9001/contactform";


    //Users
      inserturlc = "https://job4jobless.com:9001/insertusermail";
      logincheckurl = "https://job4jobless.com:9001/logincheck";
      fetchuserurl = "https://job4jobless.com:9001/fetchuser";
      updateUserurl ="https://job4jobless.com:9001/updateUser";
      insertusermailurl ="https://job4jobless.com:9001/insertusermailgog";
    //Employer
      inserturle = "https://job4jobless.com:9001/insertemployer";

      inserturlemail = "https://job4jobless.com:9001/insertemployeremail";
    employercheckurl = "https://job4jobless.com:9001/logincheckemp";
    employerdetailsfetchurl="https://job4jobless.com:9001/fetchemployer";
    employerupdateurl ="https://job4jobless.com:9001/updateEmployee";




    //Job Post
        inserturljobpost = "https://job4jobless.com:9001/jobpostinsert";
        fetchjobposturl ="https://job4jobless.com:9001/fetchjobpost";
        
    //Contact
      inserturlcontact = "https://job4jobless.com:9001/insertcontact";
      fetchcontactdetails="https://job4jobless.com:9001/fetchcontact";

      //Apply Job
      inserturlapplyjob = "https://job4jobless.com:9001/insertapplyjob";
    fetchapplyjobform = "https://job4jobless.com:9001/fetchapplyform";


      //notification
      notificationurl="https://job4jobless.com:9001/insertnotification";


      //Resume Builder
      insert_resumeurl = "https://job4jobless.com:9001/resumeinsert";

      //fetchquestion
      fetchquestionpaperurl ="https://job4jobless.com:9001/fetchquestion";

    //check answere urkl 
    checkalanswere="https://job4jobless.com:9001/checkallanswer";
  constructor(private h1: HttpClient, private router: Router,private auth: Auth, public cookie: CookieService) { }




  contactform(data:any){
      this.h1.post(this.contactformurl,data);
  }

  public insertusermail(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlc, data).subscribe({
      next: (resp: any) => {

        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err, "get the error");
      }
    });
  }
  insertusermailgog(data:string){
    
      console.log("inside user google login");

      return this.h1.post(this.insertusermailurl , data).subscribe({
        next:(resp: any)=>{
          console.log(resp);
          console.log("data inserted");
        },
        error:(err:any)=>{
          console.log(err,"get the error");
        }
      })
  }

  fetchuser(){
    return this.h1.get(this.fetchuserurl).pipe(catchError(this.handleError));
   }    


   private handleError(error:any):Observable<never>{

    console.error('An error occurred:', error);

    // Return an observable with an error message or perform other error handling tasks.
    return throwError('Something went wrong. Please try again later.');
   }



   //update user
   updateUser(data:any): Observable<any>{
    return this.h1.post(this.updateUserurl,data).pipe(
      catchError(this.handleEr)
    );
   }

   //update employer data
   updateEmployee(data:any): Observable<any>{
    return this.h1.post(this.employerupdateurl,data).pipe(
      catchError(this.handleEr)
    );
   }
   private handleEr(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  public logincheck(data: any) {
    console.log("done");
    return this.h1.post(this.logincheckurl, data).subscribe({
      next: (resp: any) => {
        const res: User = {
          uid: resp.uid,
          userName: resp.userName,
          userFirstName: resp.userFirstName,
          userLastName: resp.userLastName,
          userPassword: resp.userPassword,
          companyuser: resp.companyuser,
          websiteuser: resp.websiteuser,
          userphone: resp.userphone,
          usercountry: resp.usercountry,
          userstate: resp.userstate,
          usercity: resp.usercity,
        };

        const mainres: User = resp;
        console.log(`Login response from server: ${mainres}`);
        this.cookie.set('user', resp.uid);
        if (resp) {
          console.log("Server responded with a object of user");

          // Redirect to the dashboard if the response is true
          this.router.navigate(['/dashboarduser/']);
        } else {
          // Handle other response statuses or errors
          this.router.navigate(['/login']);
        }
        console.log("Data checked");
      },
      error: (err: any) => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    });
  }


   logincheckemp(data: any) {
    console.log(data);
    console.log("shreyanspagal");

    return this.h1.post(this.employercheckurl, data).subscribe({
      next: (resp: any) => {
        const res: Employer = {
          empid: resp.empid,
          empfname: resp.empfname,
          emplname: resp.emplname,
          empcompany: resp.empcompany,
          empmailid: resp.empmailid,
          emppass: resp.emppass,
          empphone: resp.empphone,
          empcountry: resp.empcountry,
          empstate: resp.empstate,
          empcity: resp.empcity,
          descriptionemp: resp.descriptionemp,
        };

        const mainres: Employer = resp;
        console.log("emoployer");
        console.log(`Login response from server: ${mainres.descriptionemp}`);
        this.cookie.set('emp', resp.empid);
        console.log(resp+"this is gaurav");
        console.log(resp.empfname);
        if (resp.empfname != null ) {
          console.log("Server responded with a object of user");
           
          // Redirect to the dashboard if the response is true
          this.router.navigate(['/dashboardemp/']);
        } else {
          // Handle other response statuses or errors
          this.router.navigate(['/employer/empsign']);
        }
     
      },
      error: (err: any) => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    });
  }





  public insertemployer(data: any) {
    console.log("done");
    return this.h1.post(this.inserturle, data).subscribe({
      next: (resp: any) => {

        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  public insertemployeremail(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlemail, data).subscribe({
      next: (resp: any) => {
        console.log("email is getting inserted");
        console.log(resp);
        this.router.navigate(['/dashboardemp/profilemep']);

        console.log("Data inserted mail");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  fetchemployer(){
    return this.h1.get(this.employerdetailsfetchurl);
   }


  public jobpostinsert(data: any) {
    console.log("done");
    return this.h1.post(this.inserturljobpost, data).subscribe({
      next: (resp: any) => {

        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  fetchjobpost(){
    return this.h1.get(this.fetchjobposturl);
   }






  public insertcontact(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlcontact, data).subscribe({
      next: (resp: any) => {

        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  fetchcontact(){
    return this.h1.get(this.fetchcontactdetails);
  }

  fetchapplyform(){
    return this.h1.get(this.fetchapplyjobform);
  }
  public insertapplyjob(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlapplyjob, data).subscribe({
      next: (resp: any) => {
        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  public insertnotification(data: any) {
    console.log("done");
    return this.h1.post(this.notificationurl, data).subscribe({
      next: (resp: any) => {
        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }



  public resumeinsert(data: any) {
    console.log(data);
    console.log("done");

      return this.h1.post(this.insert_resumeurl, data).subscribe({
      next: (resp: any) => {
        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log("inside the error");
        console.log(err);
      }
    });
  }
  //fetch question paper fetchquestionpaperurl
  fetchquestion(){
    return this.h1.get(this.fetchquestionpaperurl);
  }

  loginWithGoogle() {
   
    return signInWithPopup(this.auth, new GoogleAuthProvider());
    
  }

  logout() {
    return signOut(this.auth);
  }



  //check all answere from database 
  public checkallanswer(userAnswers: any[]) {
    console.log("Sending the answere to checked in database");
    console.log(userAnswers,"checking all the values are correct or not");
    
    // Replace `this.checkalanswere` with the actual URL where your Spring backend is hosted
    const url = this.checkalanswere;
    
    return this.h1.post(url, userAnswers).subscribe({
      next: (resp: any) => {
        console.log(resp);
        if(resp){
          this.router.navigate(['/dashboarduser/applyjob'])
        }
        console.log("Data checked from the database");
      },
      error: (err: any) => {
        console.log(err);
        this.router.navigate(['/dashboarduser/'])
      }
    });
  }
  
}
