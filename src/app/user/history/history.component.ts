import { style } from '@angular/animations';
import { Component ,Input, } from '@angular/core';
import { leavereq } from 'src/app/model/model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  //empname:string='lalitha'
  //empid:number= 1213
  //leavedetails:string ='27 june 2022'
  //reason:string ='casual'
 // status:boolean=true
  @Input('service') current!:leavereq
 
 

}



