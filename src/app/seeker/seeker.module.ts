import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SeekerRoutingModule } from './seeker-routing.module';
import { FindjobseekerComponent } from './findjobseeker/findjobseeker.component';
import { CompaniessekerComponent } from './companiesseker/companiesseker.component';
import { SalaryseekerComponent } from './salaryseeker/salaryseeker.component';
import { MessageseekerComponent } from './messageseeker/messageseeker.component';
import { NotificationseekerComponent } from './notificationseeker/notificationseeker.component';
import { ProfileseekerComponent } from './profileseeker/profileseeker.component';
import { HaderseekerComponent } from './haderseeker/haderseeker.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { MyjobsuserComponent } from './myjobsuser/myjobsuser.component';
import { HelpcenteruserComponent } from './helpcenteruser/helpcenteruser.component';
import { SettingComponent } from './setting/setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KapplyComponent } from './kapply/kapply.component';

@NgModule({
  declarations: [
    FindjobseekerComponent,
    CompaniessekerComponent,
    SalaryseekerComponent,
    MessageseekerComponent,
    NotificationseekerComponent,
    ProfileseekerComponent,
    HaderseekerComponent,
    ApplyjobComponent,
    MyjobsuserComponent,
    HelpcenteruserComponent,
    SettingComponent,
    KapplyComponent
  ],
  imports: [
    CommonModule,
    SeekerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SeekerModule { }
