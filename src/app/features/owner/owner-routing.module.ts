import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OwnerprofileeditComponent } from './profile/ownerprofileedit/ownerprofileedit.component';
import { OwnerplaygroundComponent } from './profile/ownerplayground/ownerplayground.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"EditProfile",component:OwnerprofileeditComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]},
  {path:"EditProfile",component:OwnerprofileeditComponent},
  {path:"playground",component:OwnerplaygroundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
