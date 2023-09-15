import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarduserRoutingModule } from './dashboarduser-routing.module';
import { DashboarduserComponent } from './dashboarduser.component';

import { NotificationComponent } from './notification/notification.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderuserComponent } from './headeruser/headeruser.component';
import { FindjobuComponent } from './findjobu/findjobu.component';
import { CompanyComponent } from './company/company.component';
import { SalaryComponent } from './salary/salary.component';
import { MessageComponent } from './message/message.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { SettinguserComponent } from './settinguser/settinguser.component';

@NgModule({
  declarations: [
    DashboarduserComponent,
    FindjobuComponent,
    CompanyComponent,
    SalaryComponent,
    MessageComponent,
    NotificationComponent,
    UserprofileComponent,
    HeaderuserComponent,
    ApplyjobComponent,
    ResumeComponent,
    SettinguserComponent
  ],
  imports: [
    CommonModule,
    DashboarduserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboarduserModule { }
