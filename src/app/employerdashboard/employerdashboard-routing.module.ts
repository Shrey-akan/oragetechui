import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployercompformComponent } from './employercompform/employercompform.component';
import { DashboardemployerComponent } from './dashboardemployer/dashboardemployer.component';
import { DASHBOARDFORMHEADERComponent } from './dashboardformheader/dashboardformheader.component';
import { AddjobbasicsComponent } from './addjobbasics/addjobbasics.component';


const routes: Routes = [

  {
    path:'' , component:DASHBOARDFORMHEADERComponent,
    children:[
      {
        path:'' , component:EmployercompformComponent
      },
      {
        path:'addjobbasics' , component:AddjobbasicsComponent
      }
    ]
  },
  {
    path:'dashboardemployer' , component:DashboardemployerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerdashboardRoutingModule { }
