import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormBuilder } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
