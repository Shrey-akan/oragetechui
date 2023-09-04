import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserauthService } from './userauth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  Path_of_api = "http://localhost:9001";

  requestHeader = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  );
  constructor(private http:HttpClient , private userauth:UserauthService , private router:Router ) { }

 
  public login(loginData:any){
    return this.http.post(this.Path_of_api+"/authenticate",loginData).subscribe({
      next: (resp: any) => {
  
        this.userauth.setRoles(resp.user.role);
        this.userauth.setToken(resp.jwtToken);
        const role = resp.user.role[0].roleName;
        
        if(role==="Admin"){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['./employers']);
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  public roleMatch(allowedRoles: string): boolean {
    let isMatch = false;
    const userRoles: any = this.userauth.getRoles();
    
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            // If a match is found, return true immediately
            return isMatch;
          }
        }
      }
    }
    
    // If no match is found, return false here
    return isMatch;
  }
  

}
