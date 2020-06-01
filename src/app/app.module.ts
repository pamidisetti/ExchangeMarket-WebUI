import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { PostbarComponent } from './postbar/postbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    UsersigninComponent,
    PostbarComponent,
    LandingpageComponent,
    PagenotfoundComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
