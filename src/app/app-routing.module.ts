import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';

const routes: Routes = [
  {
    path:"register",component: RegisterComponent, canActivate : [AuthGuard]
  },
  {
    path:"login",component:LoginComponent, canActivate : [AuthGuard]
  },
  {
    path:"dashboard",component:DashboardComponent, canActivate : [Auth1Guard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
