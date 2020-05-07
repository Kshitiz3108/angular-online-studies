  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AdminMenuComponent,
    TeacherDataComponent,
    StudentDataComponent,
    VerifyUserComponent,
    AdminRegisterComponent,
    AddSubjectComponent,
    StudentMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
