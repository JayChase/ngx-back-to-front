import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BackToFrontBrowserModule } from './back-to-front/back-to-front-browser.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppModule,
    BrowserModule,
    BrowserAnimationsModule,    
    BackToFrontBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
