import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
import { SliderComponent } from "./core/home/components/slider/slider.component";
import { ContactUsComponent } from "./core/home/components/contact-us/contact-us.component";



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
    SliderComponent,
    ContactUsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
