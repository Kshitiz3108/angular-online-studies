import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  user:User;
  constructor(){
  }
  printer(loginString:Object){
    loginString:String;
    if(loginString==1){
      return "Username not registered";
    }
    if(loginString==2){
      return "Student-first-login";
    }
    if(loginString==3){
      return "Teacher-first-login";
    }
    if(loginString==4){
      return "Admin-login";
    }
    if(loginString==7){
      return "User is rejected. Please enter correct details on next screen for reverification";
    }
    if(loginString==8){
      return "User still waiting for verification";
    }
    
    if(loginString==9){
      return "The password you entered is incorrect";
    }
    if(loginString==5){
      return "Student-login";
    }
    if(loginString==6){
      return "Teacher-login";
    }
    if(loginString==10){
      return "User is already logged in/Please sign out from other device";
    }
  }

}
