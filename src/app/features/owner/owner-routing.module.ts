import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';
import { AddPlaygroundComponent } from './profile/add-playground/add-playground.component';
import { ListPlaygroundComponent } from './listPlayground/list-playground/list-playground.component';
import { AuthGuard } from 'src/app/_authenticaton/auth.guard';
import { EditPlaygroundComponent } from './listPlayground/edit-playground/edit-playground.component';


const routes: Routes = [
  {path:"",component:ProfileComponent,children:[
    // {path:"EditProfile",component:OwnerprofileeditComponent},
    // {path:"details",component:DetailsdepartmentComponent},

  ]},
  {path:"EditProfile",component:EditPorfileComponent},
  {path:"playground",component:AddPlaygroundComponent},
  {path:"list",component:ListPlaygroundComponent  },
  {path:"edit/:id",component:EditPlaygroundComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
