import { Pipe, PipeTransform } from '@angular/core';
import { leavereq } from '../model/model';

@Pipe({
  name: 'empid'
})
export class EmpidPipe implements PipeTransform {

  transform(req:leavereq[],id:number): leavereq[] {

     return req.filter(x => x.empid==id);
   }
}
