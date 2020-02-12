import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';





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
import { LoginComponent as userlogin } from './features/auth/user/login/login.component';
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




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    FormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
