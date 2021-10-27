import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import {LoginGuard} from "../shared/guards/LoginGuard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    LoginGuard
  ]
})
export class AuthRoutingModule { }