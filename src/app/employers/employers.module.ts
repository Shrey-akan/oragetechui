import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployersRoutingModule } from './employers-routing.module';
import { PostajobComponent } from './postajob/postajob.component';
import { FindacvComponent } from './findacv/findacv.component';
import { ProductComponent } from './product/product.component';
import { ResourcesComponent } from './resources/resources.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { SignInEmpComponent } from './sign-in-emp/sign-in-emp.component';
import { HeaderemployerComponent } from './headeremployer/headeremployer.component';
import { FindjobsempComponent } from './findjobsemp/findjobsemp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyFormComponent } from './company-form/company-form.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { EmpdetailsPageComponent } from './empdetails-page/empdetails-page.component';
import { EmpjobdescribeFormComponent } from './empjobdescribe-form/empjobdescribe-form.component';
import { SigninempComponent } from './signinemp/signinemp.component';
import { SignInCheckempComponent } from './sign-in-checkemp/sign-in-checkemp.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { EmployerdashboardModule } from '../employerdashboard/employerdashboard.module';

@NgModule({
  declarations: [
    PostajobComponent,
    FindacvComponent,
    ProductComponent,
    ResourcesComponent,
    HelpcenterComponent,
    SignInEmpComponent,
    HeaderemployerComponent,
    FindjobsempComponent,
    CompanyFormComponent,
    AdvancesearchComponent,
    EmpdetailsPageComponent,
    EmpjobdescribeFormComponent,
    SigninempComponent,
    SignInCheckempComponent,
    EmployerformComponent
    
  
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployerdashboardModule
  ]
})
export class EmployersModule { }
