import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FindjobComponent } from './findjob/findjob.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {CookieService} from 'ngx-cookie-service'
import { environment } from 'src/environments/environment';
import { UpdateProfilePopupComponent } from './update-profile-popup/update-profile-popup.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FindjobComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent,
    UpdateProfilePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HttpClientModule,
    ReactiveFormsModule
    // NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
