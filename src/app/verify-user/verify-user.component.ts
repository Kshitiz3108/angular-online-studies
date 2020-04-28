import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable, Subscription,interval } from 'rxjs';
import { UserService } from '../user.service';
import { error } from '@angular/compiler/src/util';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  Users:Observable<User>;
  i:number;
  private subscription:Subscription;
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.subscription=interval(5000).subscribe(
      (val)=>{
        this.loadData();
      }
    )
  }

  

  loadData(){
    this.Users=this.adminService.listUser();
    console.log(this.Users);
  }

  verifyUser(id:String){
    this.adminService.verifyUser(id).subscribe(
      data=>{
        this.loadData();
      },
      error=>console.log(error)
      
    );
  }

  rejectUser(id:String){
    this.adminService.rejectUser(id).subscribe(
      data=>{
        this.loadData();
      },
      error=>console.log(error)
      );
  }

}
