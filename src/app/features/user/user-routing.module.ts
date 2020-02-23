import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';
import { BookingComponent } from './booking/booking-add/booking.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"add",component:AdddepartmentComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]},
  {path:"EditProfile",component:EditPorfileComponent},
  {path:"booking/:id",component:BookingComponent},
  {path:"booked/list",component:BookingListComponent},
  {path:"booked/edit/:id",component:BookingEditComponent}
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
