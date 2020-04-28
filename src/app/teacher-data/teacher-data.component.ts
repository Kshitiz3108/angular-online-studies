import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { Observable } from 'rxjs';
import { SubjectService } from '../subject.service';
import { SessionServiceService } from '../session-service.service';

@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit {

  Subjects:Subject[]=[];
  a1:String;
  a2:String;
  a3:String;
  i=0;
  count=0;
  sub:Subject=new Subject();
  Subavailable:Observable<Subject>;
  constructor(private subjectService:SubjectService,private sessions:SessionServiceService) { }

  ngOnInit(): void {
    console.log(this.sessions.get('user-id'));
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
    this.Subjects.splice(this.count,1);
  }

  onChange(classValue) {
    this.Subavailable=this.subjectService.listSubject(classValue);
    console.log(this.subjectService.listSubject(classValue));
  }

  submitSubject(){
    var j=this.Subjects.length;
    console.log(j);
    if(j>3){
      var threeconfirm=confirm("Only first 3 subjects will be only submitted");
      console.log(threeconfirm);
      if(threeconfirm){
        for(var k=3;k<j;k++){
          this.Subjects.pop();
        }
      }
    }
    else{
      console.log("vhhj");
    }
  }
}
