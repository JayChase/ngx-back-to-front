import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class UniversalService {

  constructor( @Inject(PLATFORM_ID) public platform_id) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platform_id);
  }

}
