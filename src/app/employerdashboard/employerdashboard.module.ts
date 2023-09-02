import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EmployerdashboardRoutingModule } from './employerdashboard-routing.module';
import { EmployercompformComponent } from './employercompform/employercompform.component';
import { DashboardemployerComponent } from './dashboardemployer/dashboardemployer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddjobbasicsComponent } from './addjobbasics/addjobbasics.component';
import { DASHBOARDFORMHEADERComponent } from './dashboardformheader/dashboardformheader.component';
import { DescriptioneditorComponent } from './descriptioneditor/descriptioneditor.component';

@NgModule({
  declarations: [
    EmployercompformComponent,
    DashboardemployerComponent,
    AddjobbasicsComponent,
    DASHBOARDFORMHEADERComponent,
    DescriptioneditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    EmployerdashboardRoutingModule
  ]
})
export class EmployerdashboardModule { }
