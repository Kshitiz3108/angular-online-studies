import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

import * as $ from "jquery";

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { LoginServiceService } from '../login-service.service';
import { SessionServiceService } from '../session-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  s:string="";
  signupuser:User=new User();
  loginuser:User=new User();
  signupmessage:String="";
  loginmessage:String="";
  signupvisibility:boolean;
  loginvisibility:boolean;
  loginresponse:Object;
  constructor(private route:Router,private userService:UserService,private loginService:LoginServiceService,private session:SessionServiceService) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
	  container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
	  container.classList.remove("right-panel-active");
    });
  }

  onsignup(){
    this.userService.createUser(this.signupuser).
    subscribe(
      (data) =>
      {
        this.dataright();
      },
      (error)=>
      {
        this.datawrong();
      }
      )
  }

  dataright(){
    this.signupvisibility=true;
    this.signupmessage="User waiting for verification by admin";

  }

  datawrong(){
    this.signupvisibility=true;
    this.signupmessage="Username/UserID already already registered";
  }

  onlogin(){
    console.log(this.loginuser.username)
    this.userService.loginUser(this.loginuser).
    subscribe(
      (data)=>
      { data;
        this.loginresponse=data;
        this.loginvisibility=true;
        this.loginmessage=this.loginService.printer(this.loginresponse);
        if(this.loginmessage==="Teacher-login"){
          sessionStorage.setItem("user-id",JSON.stringify(this.loginuser.username));
          this.route.navigate(['../teacher-data']);
        }
        if(this.loginmessage==="Student-login"){
          sessionStorage.setItem("user-id",JSON.stringify(this.loginuser.username));
          this.route.navigate(['../student-data']);
        }
      }
    )
  }
}
