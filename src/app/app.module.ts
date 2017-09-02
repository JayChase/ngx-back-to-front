import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { BackToFrontModule } from './back-to-front/back-to-front.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BackToFrontModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
