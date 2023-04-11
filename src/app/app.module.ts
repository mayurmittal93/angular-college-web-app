import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from ‘ngx - toastr’;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentModule } from './assignment/assignment.module';
import { AttendanceModule } from './attendance/attendance.module';
import { CurriculamModule } from './curriculam/curriculam.module';
import { DocumentsModule } from './documents/documents.module';
import { ResultModule } from './result/result.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../app/corefolder/material.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DashboardComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    UserAuthModule,
    AttendanceModule,
    ResultModule,
    DocumentsModule,
    CurriculamModule,
    AssignmentModule,
    MaterialModule,


    // ToastrModule.forRoot(),
  ],
  exports: [

  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
