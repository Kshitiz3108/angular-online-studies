import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,FormControl } from '@angular/forms';
import {Subject}from '../subject';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  Subjects:Subject[]=[];
  a1:String;
  a2:String;
  a3:String;
  i=0;
  count=0;
  sub:Subject=new Subject();
  addResponse:Object;
  submitted:boolean;
  constructor(private route:Router,private adminService:AdminService) {

   }

  ngOnInit(): void {
    this.submitted=false;
  }

  subadd(c,k,p){
    this.Subjects[this.i]=new Subject();
    this.Subjects[this.i].ClassStd=c;
    this.Subjects[this.i].SubjectName=k;
    this.Subjects[this.i].OptionalSubject=p;
    this.i++;
  }

  rejectSubject(a,b,c){
    this.sub.ClassStd=a;
    this.sub.SubjectName=b;
    this.sub.OptionalSubject=c;
    this.count=this.Subjects.indexOf(this.sub);
    console.log(this.Subjects);
    this.Subjects.splice(this.count,1);
  }

  submitSubject(){
    console.log(this.Subjects);
    var submitsubject=confirm("Do you want to submit the subjects");
    if(submitsubject){
      this.adminService.submitSubjects(this.Subjects).
      subscribe(
        (data)=>
          {
            data;
            this.addResponse=data;
            alert(this.addResponse);
            this.submitted=true;  
          }
        )
      }
  }

  list(){
    this.route.navigate(['../admin/user-verify']);
  }
}
