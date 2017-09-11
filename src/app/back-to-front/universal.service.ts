import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class UniversalService {
  private firstLoad = true;
  firstRoute: string;
  currentRoute: string;

  constructor(
    @Inject(PLATFORM_ID) public platform_id: any,
    private router: Router
  ) {
    router.events
      .map((event) => {
        return event;
      })
      .filter(event => event instanceof NavigationEnd)
      .subscribe((result: any) => {
        if (this.firstLoad) {
          this.firstRoute = result.url;
          this.firstLoad = false;
        }

        this.currentRoute = result.url;
      });
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platform_id);
  }

  isFirstRouteLoad(): boolean {
    if (this.firstRoute === this.currentRoute) {
      this.firstRoute = undefined;
      return true;
    } else {
      return false;
    }
  }
}
