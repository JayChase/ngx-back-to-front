import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BackToFrontServerModule } from './back-to-front/back-to-front-server.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppModule,
    ServerModule,
    BackToFrontServerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
