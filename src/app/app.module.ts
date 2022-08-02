import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanApplicationService } from './loan-application/loan-application.service';
import { LoanApplicationEditComponent } from './loan-application/loan-application-edit/loan-application-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoanApplicationComponent,
    LoanApplicationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, LoanApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
