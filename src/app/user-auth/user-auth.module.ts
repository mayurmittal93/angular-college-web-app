import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSlideToggleModule
  ]
})
export class UserAuthModule { }
