import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentModule } from './assignment/assignment.module';
import { AttendanceModule } from './attendance/attendance.module';
import { CurriculamModule } from './curriculam/curriculam.module';
import { DocumentsModule } from './documents/documents.module';
import { ResultModule } from './result/result.module';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserAuthModule,
    AttendanceModule,
    ResultModule,
    DocumentsModule,
    CurriculamModule,
    AssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
