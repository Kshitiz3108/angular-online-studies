import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  user:User;
  constructor(){
  }
  printer(stu:Object){
    stri:String;
    console.log(stu);
    if(stu==1){
      return "Username not registered";
    }
    if(stu==2){
      return "Student-login";
    }
    if(stu==3){
      return "Teacher-login";
    }
    if(stu==4){
      return "Admin-login";
    }
    if(stu==5){
      return "User is rejected. Please enter correct details on next screen for reverification";
    }
    if(stu==6){
      return "User still waiting for verification";
    }
  }

}
