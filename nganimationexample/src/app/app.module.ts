import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,AnimateComponent

    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
