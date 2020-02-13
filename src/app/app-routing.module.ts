import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
// auth owner
import { LoginComponent as ownerlogin } from './features/auth/owner/login/login.component';
import { RegisterComponent as ownerRegister } from './features/auth/owner/register/register.component';
// auth user
import { RegisterComponent as userRegister } from './features/auth/user/register/register.component';
import { LoginComponent as userlogin } from './features/auth/user/login/login.component';
import { AuthGuard } from './_authenticaton/auth.guard';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "ownerlogin", component: ownerlogin },
  { path: "ownerRegister", component: ownerRegister },

  { path: "userRgisiter", component: userRegister },
  { path: "userlogin", component: userlogin },

  { path: "ownerProfile", loadChildren: () => import('./features/owner/owner.module').then(m => m.OwnerModule), canActivate: [AuthGuard] },
  { path: "userProfile", loadChildren: () => import('./features/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },



  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
