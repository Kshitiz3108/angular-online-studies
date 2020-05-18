import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  private baseUrl="http://192.168.1.107:8322/subject/";
  st:String;

  constructor(private http:HttpClient) { }

  listSubject(classstd:String):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'show-subject/'+`${classstd}`);
  }

  submitTSubjects(Subjects:Object):Observable<any>{
    console.log(JSON.stringify(Subjects));
    return this.http.post(`${this.baseUrl}`+'subjects-teacher-submit',JSON.stringify(Subjects),{responseType:'text'});
  }

  submitSSubjects(Subjects:Object):Observable<any>{
    console.log(JSON.stringify(Subjects));
    return this.http.post(`${this.baseUrl}`+'subjects-student-submit',JSON.stringify(Subjects),{responseType:'text'});
  }

  showSubjects():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'show-selected-subjects');
  }

}
