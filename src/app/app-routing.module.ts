import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer/customer-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home.component';
import { ListCustomerComponent } from './customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'home', component: HomeComponent , children: [
    { path: 'customers', component: ListCustomerComponent},
    { path: 'create', component: CreateCustomerComponent},
    { path: "edit/:id", component: CreateCustomerComponent }
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

