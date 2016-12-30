// the main application module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FILE_UPLOAD_DIRECTIVES } from 'ng2-file-upload';

import AppComponent from './app.component';
import ArticlesComponent from './articles.component';
import ArticleDetailComponent from './article-detail.component';
import ArticleEditComponent from './article-edit.component';
import ImagesComponent from './images.component';
import ImageEditComponent from './image-edit.component';
import LoginComponent from './login.component';
import HomeComponent from './home.component';

import { routing, appRoutingProviders } from './router';

console.log(ArticlesComponent);

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
    ImagesComponent,
    ImageEditComponent,
    LoginComponent,
    HomeComponent,
    //FILE_UPLOAD_DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
  ],
  //providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export default class AppModule {

}
