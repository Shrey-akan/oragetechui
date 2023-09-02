import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FindjobsComponent } from './findjobs/findjobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { SalaryComponent } from './salary/salary.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInConfirmComponent } from './sign-in-confirm/sign-in-confirm.component';
import { ResetpaswordComponent } from './resetpasword/resetpasword.component';

const routes: Routes = [

      {
        path:'' ,component:FindjobsComponent
      },
      {
        path:'companies' ,component:CompaniesComponent
      },
      {
        path:'salary' ,component:SalaryComponent
      },
      {
        path:'sign-in' ,component:SignInComponent
      },
      {
        path:'sign-in-confirm' ,component:SignInConfirmComponent
      },
      {
        path:'resetpasword' ,component:ResetpaswordComponent
      },
      {
         path: 'seeker', loadChildren: () => import('./seeker/seeker.module').then(m => m.SeekerModule) 
        },
        {
          path: 'employers', loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule) 
         },
         {
          path: 'employerdashboard', loadChildren: () => import('./employerdashboard/employerdashboard.module').then(m => m.EmployerdashboardModule) 
         }
      
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
