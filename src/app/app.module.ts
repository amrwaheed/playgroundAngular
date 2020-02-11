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
import { LogsignComponent } from './components/logsign/logsign.component';
import { Table1Component } from './components/table1/table1.component';

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
    LogsignComponent,
    Table1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularStickyThingsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
