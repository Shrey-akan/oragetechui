import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniessekerComponent } from './companiesseker/companiesseker.component';
import { FindjobseekerComponent } from './findjobseeker/findjobseeker.component';
import { SalaryseekerComponent } from './salaryseeker/salaryseeker.component';
import { NotificationseekerComponent } from './notificationseeker/notificationseeker.component';
import { ProfileseekerComponent } from './profileseeker/profileseeker.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { HaderseekerComponent } from './haderseeker/haderseeker.component';
import { MessageseekerComponent } from './messageseeker/messageseeker.component';

import { MyjobsuserComponent } from './myjobsuser/myjobsuser.component';
import { HelpcenteruserComponent } from './helpcenteruser/helpcenteruser.component';
import { SettingComponent } from './setting/setting.component';
import { KapplyComponent } from './kapply/kapply.component';
import { FindjobsComponent } from '../findjobs/findjobs.component';


const routes: Routes = [

  {
    path:'' , component: HaderseekerComponent,
    children:[
      {
        path:'' , component: FindjobseekerComponent
      },
      {
        path:'companiesseker' , component: CompaniessekerComponent
      },
      
        {
        path:'salaryseeker' , component: SalaryseekerComponent
      },
      {
        path:'notificationseeker' , component: NotificationseekerComponent
      },
      {
        path:'messageseeker' , component: MessageseekerComponent
      },
      {
        path:'profileseeker' , component: ProfileseekerComponent
      },
      {
        path:'applujob' , component: ApplyjobComponent
      },
      {
        path:'myjobsuser' , component: MyjobsuserComponent
      },
      {
        path:'helpcenteruser' , component: HelpcenteruserComponent
      }, 
      {
        path:'setting' , component: SettingComponent
      },
      {
        path:'applyjob' , component: ApplyjobComponent
      },
      {
        path:'kapply' , component: KapplyComponent
      }

    ]
  },
  {
    path:'findjobs' , component:FindjobsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeekerRoutingModule { }
