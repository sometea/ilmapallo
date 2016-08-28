// the main application module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// To do: migrate to the new forms module
//import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/common';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            HttpModule,
            routing,
           ],
  providers: [appRoutingProviders,
             FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
