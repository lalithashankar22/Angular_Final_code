import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error: string | undefined;
  email: any;
  password: any;
  lastname: any;
  firstname: any;
  type:any;
  empid:any;
  //route: any;
constructor(private ss:LoginService ,private route:Router){}
  register(){
      let obj:any;
      obj={email:this.email,password:this.password,firstname:this.firstname,lastname:this.lastname,type:this.type,empid:this.empid}
      this.ss.postRgister(obj).subscribe(
        {
          next: () => { alert("Registerd Successfully");  this.route.navigate([''])},
          error: (x) => {console.log(x);alert(x.error)}
        }
     )
    
  }
}
