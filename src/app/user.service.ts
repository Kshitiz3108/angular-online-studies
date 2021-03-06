  
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://192.168.1.107:8322/user/";

  constructor(private http:HttpClient) { }

  createUser(User:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'register-user',User,{responseType:'text'});
  }

  loginUser(User:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'login-user',User,{responseType:'text'});
  }

  sendEmail(Username:String):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'sendEmail/'+`${Username}`,{responseType:'text'});
  }

  otpMatching(otp:String):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'verify-otp/'+`${otp}`,{responseType:'text'});
  }

  passwordChange(User:Object):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'password-change',User,{responseType:'text'});
  }

}
