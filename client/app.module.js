// the main application module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            HttpModule,
            FormsModule,
            routing,
           ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
