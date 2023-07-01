import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path:"",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"register",component:RegisterComponent}
]; //according to the path respective component will be loaded 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
