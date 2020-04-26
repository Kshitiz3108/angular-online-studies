  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    StudentMenuComponent,
    TeacherMenuComponent,
    AdminMenuComponent,
    TeacherDataComponent,
    StudentDataComponent,
    VerifyUserComponent,
    AdminRegisterComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
