import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackToFrontBrowserModule } from './back-to-front/back-to-front-browser.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppModule,
    BrowserAnimationsModule,
    BackToFrontBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
