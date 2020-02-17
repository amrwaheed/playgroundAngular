import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';
import { AddPlaygroundComponent } from './profile/add-playground/add-playground.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"EditProfile",component:OwnerprofileeditComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]},
  {path:"EditProfile",component:EditPorfileComponent},
  {path:"playground",component:AddPlaygroundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
