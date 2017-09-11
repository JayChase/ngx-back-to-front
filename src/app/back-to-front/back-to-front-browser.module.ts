import { NgModule, RendererFactory2, PLATFORM_ID, Inject, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlatformState } from '@angular/platform-server';

import { isPlatformBrowser } from '@angular/common';
import { BrowserStateService } from './browser-state/browser-state.service';
import { StateService } from './state.service';
import { UniversalService } from './universal.service';
import { BrowserStateInterceptor } from './browser-interceptor/browser-state.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BackToFrontBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BackToFrontBrowserModule,
      providers: [
        UniversalService,
        {
          provide: StateService,
          useClass: BrowserStateService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BrowserStateInterceptor,
          multi: true,
        }
      ]
    };
  }
}

