import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { leavereq } from 'src/app/model/model';
import { SeviceService } from 'src/app/service/sevice.service';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent {
  eform:any
  @Input('empid') currentempid!:number
  @Input('empnam') empname:any
  constructor(private fb:FormBuilder,private ss:SeviceService){
    this.eform= this.fb.group(
      {
        name:['',[Validators.required,Validators.minLength(3)]],
      date:['',[Validators.required]],
       reason:['',[Validators.required,Validators.minLength(5)]]
      }
    )
   
    }

    clear(){

    }
    post()
    {
      let name =this.eform.get('name').value
      let date=this.eform.get('date').value
      let reason=this.eform.get('reason').value
      let obj:any;
      obj={empid:this.currentempid,name:name,details:date,reason:reason,staus:'Pending'}
      this.ss.postleavereq(obj).subscribe(
        {
          next: () => { alert("leave request submited"); location.reload()},
          error: (x) => {console.log(x);alert("Something went wrong")}
        }
     )
    }
}
