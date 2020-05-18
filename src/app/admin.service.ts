import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from './subject';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://192.168.1.107:8322/admin/";
  Sub:Subject[]=[];
  constructor(private http:HttpClient) { }

  listUser(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'list-user');
  }

  verifyUser(id:String):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'verify-user/'+`${id}`,{responseType:'text'});
  }

  rejectUser(id:String):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'reject-user/'+`${id}`,{responseType:'text'});
  }

  submitSubjects(Subjects:Object):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'subjects-submit',JSON.stringify(Subjects),{responseType:'text'});
  }

  

}
