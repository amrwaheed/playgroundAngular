import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { OwnerRoutingModule } from './owner-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OwnerplaygroundComponent } from './profile/ownerplayground/ownerplayground.component';
import { OwnerinfoComponent } from './profile/ownerinfo/ownerinfo.component';
import { DetailsComponent } from './profile/details/details.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    
      OwnerplaygroundComponent, 
      OwnerinfoComponent, 
      EditPorfileComponent,
      
    
    ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
