import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  {path:'',redirectTo:'register-user',pathMatch:"full"},
  {
    path:'admin',
    component:AdminMenuComponent,
    children:[
      {path:'user-verify',component:VerifyUserComponent},
      {path:'add-subject',component:AddSubjectComponent}
    ]
  },
  {
    path:'student',
    component:StudentMenuComponent,
    children:[
      {path:'student-data',component:StudentDataComponent},
    ]
  },
  {
    path:'teacher',
    component:AdminMenuComponent,
    children:[
    ]
  },
  {path:'register-user',component:RegisterUserComponent},
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'student-data',component:StudentDataComponent},
  {path:'student-menu',component:StudentMenuComponent},
  {path:'teacher-data',component:TeacherDataComponent},
  {path:'teacher-menu',component:TeacherMenuComponent},
  {path:'forget-password',component:ForgetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
