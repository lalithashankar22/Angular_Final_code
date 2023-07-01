import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeviceService {
  httpOptions:any;
  constructor(private http:HttpClient) { }
 

  /*getleavereq():Observable<any>{
    return this.http.get("http://localhost:4500/leavereq")
  }*/
  getleavereq():Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem("authtoken")
      })
    }
    return this.http.get("http://localhost:4500/660/leavereq",this.httpOptions)
  }
  postleavereq(obj:any):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem("authtoken")
      })
    }
      return this.http.post("http://localhost:4500/660/leavereq",obj,this.httpOptions)
  }
 
  patchleavereq(obj:any,id:number):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem("authtoken")
      })
    }
      return this.http.patch("http://localhost:4500/660/leavereq/"+id,obj,this.httpOptions)
  }



}
