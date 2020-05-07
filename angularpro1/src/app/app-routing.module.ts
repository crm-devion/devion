import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {RegistrationpageComponent} from './registrationpage/registrationpage.component'
import {UsersComponent} from './users/users.component'

const routes: Routes = [
  {path:'',component:UsersComponent,children:[
    {path:'register',component:RegistrationpageComponent},
    {path:'login',component:LoginComponent},
  ]},
  {path:'',redirectTo:'login',pathMatch: 'full'},
  
  {path:'home',component:HomeComponent,children:[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'leads',component:LeadsComponent},
  {path:'dashboard',component:DashboardComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
