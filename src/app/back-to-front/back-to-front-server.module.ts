import { NgModule, RendererFactory2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlatformState } from '@angular/platform-server';

import { isPlatformBrowser } from '@angular/common';
import { ServerStateService } from './server-state/server-state.service';
import { StateService } from './state.service';
import { UniversalService } from './universal.service';
import { ServerStateInterceptor } from './server-interceptor/server-state.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BackToFrontServerModule {
  static forRoot() {
    return {
      ngModule: BackToFrontServerModule,
      providers: [
        UniversalService,
        {
          provide: StateService,
          useClass: ServerStateService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerStateInterceptor,
          multi: true,
        }
      ]
    };
  }
}
