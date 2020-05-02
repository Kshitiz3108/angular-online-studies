import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  private baseUrl="http://192.168.1.105:8322/subject/";
  st:String;

  constructor(private http:HttpClient) { }

  listSubject(classstd:String):Observable<any>{
    this.st=this.baseUrl+'show-subject/'+classstd;
    console.log(this.st)
    return this.http.get(`${this.baseUrl}`+'show-subject/'+`${classstd}`);
  }

}
