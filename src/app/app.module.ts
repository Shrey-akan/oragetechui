import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindjobsComponent } from './findjobs/findjobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { SalaryComponent } from './salary/salary.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SignInConfirmComponent } from './sign-in-confirm/sign-in-confirm.component';
import { ResetpaswordComponent } from './resetpasword/resetpasword.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindjobsComponent,
    CompaniesComponent,
    SalaryComponent,
    SignInComponent,
    SignInConfirmComponent,
    ResetpaswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
