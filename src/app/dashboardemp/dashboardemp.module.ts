import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardempRoutingModule } from './dashboardemp-routing.module';
import { DashboardempComponent } from './dashboardemp.component';
import { PostjobComponent } from './postjob/postjob.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { ProfilemepComponent } from './profilemep/profilemep.component';
import { EmpmessageComponent } from './empmessage/empmessage.component';

import { HeaderdashboardempComponent } from './headerdashboardemp/headerdashboardemp.component';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    DashboardempComponent,
    PostjobComponent,
    AlljobsComponent,
    ProfilemepComponent,
    EmpmessageComponent,

    HeaderdashboardempComponent
  ],
  imports: [
    CommonModule,
    DashboardempRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardempModule { }
