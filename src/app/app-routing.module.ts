import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ForhiddenComponent } from './forhidden/forhidden.component';
import { AboutComponent } from './about/about.component';
import { servicesVersion } from 'typescript';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [  
  {
    path:'' , component:HomeComponent
  },
  {
    path:'about' , component:AboutComponent
  },
  {
    path:'services' , component:ServicesComponent
  },
  {
    path:'contact' , component:ContactComponent
  },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  {
    path:'login' , component:LoginComponent
  },
  { path: 'forbidden', component: ForhiddenComponent },
  {
    path:'dashboard' , component:DashboardComponent
  },
  {
    path: 'employers', loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule) 
   },
   {
    path: 'seeker', loadChildren: () => import('./seeker/seeker.module').then(m => m.SeekerModule) 
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
