import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav1Component } from './navbar/nav1/nav1.component';

import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { MapsComponent } from './components/maps/maps.component';
import { SliderComponent } from './components/slider/slider.component';
import { MulticardsComponent } from './components/multicards/multicards.component';
import { Table1Component } from './components/table1/table1.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { MapComponent } from './components/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';


import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { OwnerRegisterComponent } from './components/ownar/owner-register/owner-register.component';
import { OwnerLoginComponent } from './components/owner-login/owner-login.component'

import { FormComponent } from './components/form/form.component';
import { from } from 'rxjs';
import { FormplayerComponent } from './components/formplayer/formplayer.component';
import { FormownerComponent } from './components/formowner/formowner.component';



@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    CardsComponent,
    FooterComponent,
    Navbar1Component,
    MapsComponent,
    SliderComponent,
    MulticardsComponent,
    Table1Component,
    Cards2Component,
    MapComponent,
    
    LoginComponent,
    OwnerRegisterComponent,
    OwnerLoginComponent,


    RegisterComponent,


    FormComponent,


    FormplayerComponent,


    FormownerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
    AngularStickyThingsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
