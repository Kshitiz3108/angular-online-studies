import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { Observable } from 'rxjs';
import { SubjectService } from '../subject.service';
import { SessionServiceService } from '../session-service.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit {

  Subjects:Subject[]=[];
  subs:Subject=new Subject();
  a1:String;
  a2:String;
  a3:String;
  a4:Number;
  
  addResponse:Object;
  i=0;
  count=0;
  sub:Subject=new Subject();
  subj:Subject=new Subject();
  Subavailable:Observable<Subject>;
  constructor(private subjectService:SubjectService,private sessions:SessionServiceService,private adminservice:AdminService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('user-id'));
  }

  subadd(c,k){
    this.Subjects[this.i]=new Subject();
    this.Subjects[this.i].ClassStd=c;
    this.Subjects[this.i].SubjectName=k;
    this.i++;
  }

  rejectSubject(a,b){
    this.sub.ClassStd=a;
    this.sub.SubjectName=b;
    this.count=this.Subjects.indexOf(this.sub);
    console.log(this.Subjects);
    this.Subjects.splice(this.count,1);
  }


  onChange(classValue) {
    this.Subavailable=this.subjectService.listSubject(classValue);
  }

  submitSubject(){
    var j=this.Subjects.length;
    if(j>3){
      var threeconfirm=confirm("Only first 3 subjects will be only submitted ");
      console.log(threeconfirm);
      if(threeconfirm){
        for(var k=3;k<j;k++){
          this.Subjects.pop();
        }
      }
    }
    else{
      this.adminservice.submitTSubjects(this.Subjects).
      subscribe(
        (data)=>
          {
            data;
            this.addResponse=data;
            alert(this.addResponse);
          }
        )
    }
  }
}
