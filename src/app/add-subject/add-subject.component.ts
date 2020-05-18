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
    console.log(this.Subjects.length);
    this.Subjects[this.i]=new Subject();
    this.Subjects[this.i].classStd=c;
    this.Subjects[this.i].subjectName=k;
    this.Subjects[this.i].optionalSubject=p;
    this.i++;
  }

  rejectSubject(a,b,c){
    this.sub.classStd=a;
    this.sub.subjectName=b;
    this.sub.optionalSubject=c;
    console.log("ads");
    console.log(this.sub);
    for(this.count=0;this.count<this.Subjects.length;this.count++){
      if(JSON.stringify(this.Subjects[this.count])===JSON.stringify(this.sub)){
        this.Subjects.splice(this.count);
      }
    }
    console.log(this.Subjects.length);
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
