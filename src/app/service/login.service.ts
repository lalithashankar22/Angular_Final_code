import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions: { headers: any; } | undefined;

   constructor(private http:HttpClient) {
       
    }
  
  login(email:any,password:any):Observable<object>{
 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
  
      })
    }
    return this.http.post("http://localhost:4500/login",
    {email:email,password:password},
    this.httpOptions);
  }
  postRgister(obj:any):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
      return this.http.post("http://localhost:4500/660/signup",obj,this.httpOptions)
  }
}
