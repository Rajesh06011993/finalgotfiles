import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { GotService } from "./got.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'home', component:HomeComponent },
    {path: 'view/:url', component:ViewComponent},
    {path:'', redirectTo:'home',pathMatch:'full'}

    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
