import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent,

  ],
  exports: [
    NavbarComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
