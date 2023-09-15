import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EmployerdetailsComponent } from './employerdetails/employerdetails.component';
import { JobprovidedComponent } from './jobprovided/jobprovided.component';
import { EnquirydetailsComponent } from './enquirydetails/enquirydetails.component';
import { NotificationComponent } from '../dashboarduser/notification/notification.component';
import { NotifyComponent } from './notify/notify.component';

const routes: Routes = [
  {
    path:'',component:LoginadminComponent
  },{
    path:'dashboardadmin', component:DashboardadminComponent,
    children:[
      {
        path:'',component:DashhomeComponent
      },
      {
        path:'userdetails',component:UserdetailsComponent
      },    {
        path:'employerdetails',component:EmployerdetailsComponent
      },   
       {
        path:'jobprovided',component:JobprovidedComponent
      },
      {
        path:'notify',component:NotifyComponent
      },
      // {
      //   path:'adminprofile',component:
      // },

      {
        path:'enquirydetails',component:EnquirydetailsComponent
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
