import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor() { }
 
  public setRoles(roles: []){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles(): [] {
    const rolesJson = localStorage.getItem('roles');
    return rolesJson ? JSON.parse(rolesJson) : [];
  }
  
  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }
  public getToken(): string {
    const jwtToken = localStorage.getItem('jwtToken');
    return jwtToken ? jwtToken : ''; // Return an empty string if null
  }
  

  public clear(){
    localStorage.clear();
  }
  public IsLoggedIn(){
   return this.getRoles() && this.getToken();
  }
}
