import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RequestComponent } from './admin/request/request.component';
import { LeavereqComponent } from './user/leavereq/leavereq.component';
import { HistoryComponent } from './user/history/history.component';
import { EmpidPipe } from './pipes/empid.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    RequestComponent,
    LeavereqComponent,
    HistoryComponent,
    EmpidPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
