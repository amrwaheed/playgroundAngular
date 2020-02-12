import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"add",component:AdddepartmentComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
