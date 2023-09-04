import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostajobComponent } from './postajob/postajob.component';
import { HeaderemployerComponent } from './headeremployer/headeremployer.component';

import { FindacvComponent } from './findacv/findacv.component';
import { ProductComponent } from './product/product.component';
import { ResourcesComponent } from './resources/resources.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';


import { FindjobsempComponent } from './findjobsemp/findjobsemp.component';

import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { SigninempComponent } from './signinemp/signinemp.component';
import { SignInCheckempComponent } from './sign-in-checkemp/sign-in-checkemp.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { SignInEmpComponent } from './sign-in-emp/sign-in-emp.component';

const routes: Routes = [
  {
    path: '', component: HeaderemployerComponent,
    children: [
      {
        path: '', component: PostajobComponent
      },
      {
        path: 'findacv', component: FindacvComponent
      },
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'resources', component: ResourcesComponent
      },
      {
        path: 'helpcenter', component: HelpcenterComponent
      },
      {
        path: 'sign-in-emp', component: SignInEmpComponent
      },
      {
        path: 'findjobsemp', component: FindjobsempComponent
      },

      {
        path: 'advancesearch', component: AdvancesearchComponent
      },
      {
        path: 'sign-in-checkemp', component: SignInCheckempComponent
      },
      {
        path: 'employerform', component: EmployerformComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }
