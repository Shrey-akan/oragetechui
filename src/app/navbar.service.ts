import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';






@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  //User Mail insert API
  inserturlc = "http://localhost:9001/insertusermail";

  //User Register Information API
  inserturluser = "http://localhost:9001/insertuserdetail";

  //fetch user register data to check sign-in details
  viewuserdetailurl = "http://localhost:9001/viewuserdetailservice";

  //User Mail insert API
  inserturle = "http://localhost:9001/insertempmailadd";

  //employer Register Information API
  inserturlemployer = "http://localhost:9001/insertempdetail";

  //fetch employer register data to check sign-in details
  viewemployerdetailurl = "http://localhost:9001/viewemployerdetailservice";


  //insert user from 
  insertuaerformurl = "http://localhost:9001/insertuserform";

  //view user form details
  viewuserformdetailurl = "http://localhost:9001/viewformuser";

  //insert contact details from 
  insertcontacturl = "http://localhost:9001/insertcontactempl";


  //Employer Register Account information Service
  insertempaccregurl = "http://localhost:9001/insertemployeraccount";



  //Job Post Insert Data API
  insertjobpostdataurl = "http://localhost:9001/jobpostinsert";


  //API for job Post get data
  viewjobpostdeturl = "http://localhost:9001/viewjobpostdet";

  Path_of_api = "http://localhost:9001";

  employercompanydetailurl = "http://localhost:9001/empaccregrepo";
  data: any;
  constructor(private h1: HttpClient, private cookieService: CookieService) { }

  empaccregrepo() {
    return this.h1.get(this.employercompanydetailurl);
  }




  //insert user mail api
  insertusermail(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlc, data);
  }


  //insert user register api
  public insertuserdetail(userregister:any) {
    console.log("done");
    return this.h1.post(this.Path_of_api+"/registerNewUser",userregister).subscribe({
      next: (resp: any) => {
  
        
        
     console.log("Data inserted");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  //fetch user register data to check sign-in details
  viewuserdetailservice() {
    return this.h1.get(this.viewuserdetailurl);
  }




 









  //insert user mail api
  insertempmailadd(data: any) {
    console.log("done");
    return this.h1.post(this.inserturle, data);
  }

  //insert employer register api
  insertempdetail(data: any) {
    console.log("done");
    return this.h1.post(this.inserturlemployer, data);
  }


  //fetch employer register data to check sign-in details
  viewemployerdetailservice() {
    return this.h1.get(this.viewemployerdetailurl);
  }



  //insert user mail api
  insertuserform(data: any) {
    console.log("done");
    return this.h1.post(this.insertuaerformurl, data);
  }
  //insert user mail api
  insertcontactempl(data: any) {
    console.log("done");
    return this.h1.post(this.insertcontacturl, data);
  }

  viewformuser() {
    return this.h1.get(this.viewuserformdetailurl);
  }
  sendRequest(): Observable<any> {
    const url = 'viewuserdetailurl';
    const options = { withCredentials: true };

    return this.h1.get(url, options);
  }

  //Employer Register Details service
  insertemployeraccount(data: any) {
    console.log("done");
    return this.h1.post(this.insertempaccregurl, data);
  }

  //Job Post 
  jobpostinsert(data: any) {
    console.log("Done");
    return this.h1.post(this.insertjobpostdataurl, data);
  }


  viewjobpostdet() {
    return this.h1.get(this.viewjobpostdeturl);
  }

}
