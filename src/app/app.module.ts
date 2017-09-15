import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule, MdCardModule } from '@angular/material';

import { DemoModule } from './demo/demo.module';
import { TestService } from './demo/test.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    DemoModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled'
    })
  ],
  providers: [
    TestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
