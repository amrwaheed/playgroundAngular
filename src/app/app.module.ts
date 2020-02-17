import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { AuthGuard } from './_authenticaton/auth.guard';
import { AuthInterceptor } from './_authenticaton/auth.interceptor';
import { UserService } from './_services/user/user.service';
import { OwnerService } from './_services/owner/owner.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
// auth owner
import { LoginComponent as ownerlogin } from './features/auth/owner/login/login.component';
import { RegisterComponent as ownerRegister } from './features/auth/owner/register/register.component';
// auth user
import { RegisterComponent as userRegister } from './features/auth/user/register/register.component';
import { LoginComponent  as userlogin } from './features/auth/user/login/login.component';

// home COmponents
import { Cards0Component } from "./core/home/components/cards0/cards0.component";
import { Cards1Component } from "./core/home/components/cards1/cards1.component";
import { AccordionComponent } from "./core/home/components/accordion/accordion.component";
import { SlideShowComponent } from "./core/home/components/slide-show/slide-show.component";
import { ContactUsComponent } from "./core/home/components/contact-us/contact-us.component";
import { ImagesComponent } from "./core/home/components/images/images.component";
import { RegisterButtonComponent } from "./core/home/components/register-button/register-button.component";
import { RegisterButtonUserComponent } from "./core/home/components/register-button-user/register-button-user.component";
import { PlaygroundListComponent } from './features/playground/playground-list/playground-list.component';
import { PlaygroundDetailsComponent } from './features/playground/playground-details/playground-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    // auth owner
    ownerlogin,
    ownerRegister,
    // auth user
    userRegister,
    userlogin,
    //--------//
    //home components
    Cards0Component,
    Cards1Component,
    AccordionComponent,
    SlideShowComponent,
    ContactUsComponent,
    ImagesComponent,
    RegisterButtonComponent,
    RegisterButtonUserComponent,
    PlaygroundListComponent,
    PlaygroundDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule


    
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true }
    ,UserService
    ,OwnerService
    , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
