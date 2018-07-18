import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const  routes: Routes =[
  {
    path :'',
    component:HomeComponent
  },
  {
    path :'about',
    component:AboutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
