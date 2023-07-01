import { Component,OnInit } from '@angular/core';
import { SeviceService } from 'src/app/service/sevice.service';
import { leavereq } from '../model/model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  //adminname:string ='lali' 
  empname =sessionStorage.getItem("empname")
  service:leavereq []=[];
 constructor(private ss:SeviceService ){}
  ngOnInit(): void {
    this.ss.getleavereq().subscribe(
      {
        next:(data:leavereq[])=>{this.service =data
         // sessionStorage.setItem('id',data.accessToken)
        },
        error:(error:any)=> this.service =[]
      }
    )
  } 


}
