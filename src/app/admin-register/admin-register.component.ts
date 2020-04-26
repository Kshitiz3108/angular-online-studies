import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';
import { UserService } from '../user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  signupuser:User=new User();
  loginuser:User=new User();
  signupmessage:String="";
  loginmessage:String="";
  signupvisibility:boolean;
  loginvisibility:boolean;
  loginresponse:Object;
  i:number=5;
  constructor(private route:Router,private userService:UserService,private loginService:LoginServiceService,private adminService:AdminService) { }

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
    this.signupuser.role="Admin";
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
    this.userService.loginUser(this.loginuser).
    subscribe(
      (data)=>
      { data;
        this.loginresponse=data;
        this.loginvisibility=true;
        this.loginmessage=this.loginService.printer(this.loginresponse);
        if(this.loginmessage=="Admin-login"){
          this.route.navigate(['../admin/user-verify']);
        }
      }
    )
  }

}
