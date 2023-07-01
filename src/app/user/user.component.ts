import { Component } from '@angular/core';
import { SeviceService } from '../service/sevice.service';
import { leavereq } from '../model/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
//empnam:string='lali'
//empid:number=123
empname =sessionStorage.getItem("empname")
empidy=Number(sessionStorage.getItem("empid"))
constructor(private ss:SeviceService ){
}
service:leavereq []=[]; 
ngOnInit(): void {
  this.ss.getleavereq().subscribe(
    {
      next:(data:leavereq[])=>this.service =data,
      error:(error:any)=> this.service =[]
    }
  )
} 
}
