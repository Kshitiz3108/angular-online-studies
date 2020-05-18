import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  isDisabled:boolean=true;
  usernameResponse="";
  otpResponse="";
  shown
  passwordResponse="";
  otp="";
  otpsubmitted:boolean=true;
  user:User=new User();
  confirmpassword="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {    
  }

  usernameSubmit(){
    this.userService.sendEmail(this.user.username).subscribe(
      (data)=>
      {
        data;
        this.usernameResponse=data;
        if(this.usernameResponse!="Username not registered"){
          this.isDisabled=false;
        }
      }
    );
  }

  otpSubmit(){
    this.userService.otpMatching(this.otp).subscribe(
      (data)=>
      {
        data;
        this.otpResponse=data;
        if(this.otpResponse==="otp-matched"){
          this.otpsubmitted=false;
        }

      }
    )
  }

  passwordSubmit(){
    if(this.user.password!=this.confirmpassword){
      this.passwordResponse="Confirm password doesn't matched";
    }
    else{
      this.userService.passwordChange(this.user).subscribe(
        (data)=>
        {
          data;
          this.passwordResponse=data;
        }
      )
    }
  }

}
