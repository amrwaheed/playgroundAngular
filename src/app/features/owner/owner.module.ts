import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OwnerprofileheaderComponent } from './profile/ownerprofileheader/ownerprofileheader.component';
import { OwnerplaygroundComponent } from './profile/ownerplayground/ownerplayground.component';
import { OwnerinfoComponent } from './profile/ownerinfo/ownerinfo.component';
import { OwnerprofileeditComponent } from './profile/ownerprofileedit/ownerprofileedit.component';


@NgModule({
  declarations: [
    ProfileComponent,
     OwnerprofileheaderComponent,
      OwnerplaygroundComponent, 
      OwnerinfoComponent, 
      OwnerprofileeditComponent,
      
    
    ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
