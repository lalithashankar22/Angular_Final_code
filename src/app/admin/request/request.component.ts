import { Component, Input } from '@angular/core';
import { leavereq } from 'src/app/model/model';
import { SeviceService } from 'src/app/service/sevice.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
@Input('service') current!:leavereq
  router: any;
constructor(private ss:SeviceService){}

updateApprove(id:number){
  let obj:any;
  obj={staus:'Approved'}
  this.ss.patchleavereq(obj,id).subscribe(
    {
      next: () => { alert("Approved")
      location.reload()},
      error: (x) => {console.log(x);alert("Something went wrong")}
    }
  )
}

updateReject(id:number){
  let obj:any;
  obj={staus:'Rejected'}
  this.ss.patchleavereq(obj,id).subscribe(
    {
      next: () => { alert("Rejected") 
      location.reload()},
      error: (x) => {console.log(x);alert("Something went wrong")}
    }
  )
}
}
