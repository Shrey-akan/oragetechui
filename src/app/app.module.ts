import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { CheckotpComponent } from './checkotp/checkotp.component';
import { OtpexpiredComponent } from './otpexpired/otpexpired.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { CheckotpuserComponent } from './checkotpuser/checkotpuser.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { Job4joblesspComponent } from './job4joblessp/job4joblessp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FinjobpageComponent } from './finjobpage/finjobpage.component'; // Import MatSelectModule
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
    UpdateProfilePopupComponent,
    CheckotpComponent,
    OtpexpiredComponent,
    ResetpassComponent,
    CheckotpuserComponent,
    ResetpasswordComponent,
    Job4joblesspComponent,
    PagenotfoundComponent,
    FinjobpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
    // NgbModule
  ],
  providers: [CookieService,{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
