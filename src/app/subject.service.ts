import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl="http://localhost:8322/subject/";
  constructor(private http:HttpClient) { }

  listSubject(classStd:String):Observable<any>{
    console.log(classStd);

    return this.http.get(`${this.baseUrl+'show-subject'}/${classStd}`);

  }
}
