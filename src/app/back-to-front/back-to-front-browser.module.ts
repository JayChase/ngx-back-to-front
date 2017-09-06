import { NgModule, RendererFactory2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformState } from '@angular/platform-server';

import { isPlatformBrowser } from '@angular/common';
import { BrowserStateService } from './browser-state/browser-state.service';
import { StateService } from './state.service';
import { UniversalService } from './universal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BackToFrontBrowserModule {
  static forRoot() {
    return {
      ngModule: BackToFrontBrowserModule,
      providers: [
        UniversalService,
        {
          provide: StateService,
          useClass: BrowserStateService
        }
      ]
    };
  }
}

