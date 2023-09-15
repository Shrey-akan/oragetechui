import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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

  Path_of_api = "http://localhost:9001";

//Users
  inserturlc = "http://localhost:9001/insertusermail";
  logincheckurl = "http://localhost:9001/logincheck";
  fetchuserurl = "http://localhost:9001/fetchuser";


//Employer
  inserturle = "http://localhost:9001/insertemployer";
 employercheckurl = "http://localhost:9001/logincheckemp";
 employerdetailsfetchurl="http://localhost:9001/fetchemployer";

//Job Post
    inserturljobpost = "http://localhost:9001/jobpostinsert";
    fetchjobposturl ="http://localhost:9001/fetchjobpost";
    
//Contact
  inserturlcontact = "http://localhost:9001/insertcontact";
  fetchcontactdetails="http://localhost:9001/fetchcontact";

  //Apply Job
  inserturlapplyjob = "http://localhost:9001/insertapplyjob";



  //notification
  notificationurl="http://localhost:9001/insertnotification";


  constructor(private h1: HttpClient, private router: Router, public cookie: CookieService) { }



  public insertusermail(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlc, data).subscribe({
      next: (resp: any) => {

        console.log(resp);

        console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  fetchuser(){
    return this.h1.get(this.fetchuserurl);
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

}
