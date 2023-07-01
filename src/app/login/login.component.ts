import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string | undefined;
  email: any;
  password: any;
constructor(private log:LoginService ,private route:Router){}
register():void{
  this.route.navigate(['register'])
}
login():void{
  this.error="";
  if(this.email.length==0 || this.password.length==0)
 {this.error="Fill all the fields";} 
  else{
   
    this.log.login(this.email,this.password).subscribe(
       { next:   (response:any)=>{ 
        sessionStorage.setItem('authtoken',response.accessToken)
        sessionStorage.setItem('empid',response.user.empid)
        sessionStorage.setItem('empname',response.user.firstname)
           if(response.user.type=="admin")
             { 
              this.route.navigate(['admin']);} 
           else
               this.route.navigate(['user']);
         },

         error:()=>{alert('Invalid Credentials')
        }
          }
    )
        }
}
}
