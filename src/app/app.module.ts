import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormBuilder } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    HomeComponent,
    CustomerReportComponent,
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
