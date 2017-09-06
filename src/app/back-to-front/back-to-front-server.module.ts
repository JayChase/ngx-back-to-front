import { NgModule, RendererFactory2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformState } from '@angular/platform-server';

import { isPlatformBrowser } from '@angular/common';
import { ServerStateService } from './server-state/server-state.service';
import { StateService } from './state.service';
import { UniversalService } from './universal.service';

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
        }
      ]
    };
  }
}


// export function stateServiceFactory(universalService: UniversalService, rendererFactory2: RendererFactory2, platformState: PlatformState) {
//   return universalService.isBrowser() ? new BrowserStateService(rendererFactory2, platformState) : new ServerStateService(rendererFactory2, platformState);
// }
