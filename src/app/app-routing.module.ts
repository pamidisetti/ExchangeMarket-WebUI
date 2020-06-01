import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {UsersigninComponent} from './usersignin/usersignin.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: UsersigninComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
