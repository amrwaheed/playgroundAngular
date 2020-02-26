import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { OwnerRoutingModule } from './owner-routing.module';
import { ProfileComponent } from './profile/profile.component';
 
import { DetailsComponent } from './profile/details/details.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';
import { AddPlaygroundComponent } from './profile/add-playground/add-playground.component';
import { AgmCoreModule } from '@agm/core';
import { ListPlaygroundComponent } from './Playground/list-playground/list-playground.component';
import { EditPlaygroundComponent } from './Playground/edit-playground/edit-playground.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    
    //*-*//\\//
    EditPorfileComponent,
    AddPlaygroundComponent,
    ListPlaygroundComponent,
    EditPlaygroundComponent,
    BookingListComponent,
     
    
    ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyB90FxtYG_ybAYXGkz0ybkmkboE2nEbezI"
    }),
     //------------------------
     DataTablesModule


  ]
})
export class OwnerModule { }
