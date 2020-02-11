import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { OwnerLoginComponent } from './components/owner-login/owner-login.component';
import { OwnerRegisterComponent } from './components/ownar/owner-register/owner-register.component';


const routes: Routes = [
{path:"PlayerLogin",component:LoginComponent},
{path:"PlayerSignup",component:RegisterComponent},
{path:"ownerlogin",component:OwnerLoginComponent},
{path:"ownersignup",component:OwnerRegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
