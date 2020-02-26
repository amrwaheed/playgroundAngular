import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';




import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking-add/booking.component';
import { UserSliderComponent } from './profile/user-slider/user-slider.component';
import { ProgressBarComponent } from './profile/progress-bar/progress-bar.component';
import { DetailsComponent } from './profile/details/details.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BookingComponent,
    UserSliderComponent,
    ProgressBarComponent,
    DetailsComponent,
    EditPorfileComponent,
    BookingListComponent,
    BookingEditComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //------------------------
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    //------------------------
    DataTablesModule,
    MatNativeDateModule

  ]
})
export class UserModule { }
