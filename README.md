# ngx front to back (alpha)

Library providing server to client state transfer for HttpClient and other tools to help with common Angular Universal issues.

## Install

```bash
npm install --save ngx-back-to-front
```

## Setup

These instructions apply to an Angular-cli project which has been setup for Universal as in this [guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering). 
If you need a ready made starter project have a look at [ngx-express-universal](https://github.com/JayChase/ngx-express-universal).

Import **BackToFrontBrowserModule** into **app.browser.module**

```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackToFrontBrowserModule } from 'ngx-back-to-front';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        BackToFrontBrowserModule.forRoot(),
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule { }
```

Import **BackToFrontServerModule** into **app.server.module**

```typescript
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { BackToFrontServerModule } from 'ngx-back-to-front';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        BackToFrontServerModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
```

### How the state transfer works

The **BackToFrontBrowserModule** will register an HttpInterceptor which will write the repsonses from any get requests made when rendering on the server and inject them into the index.html returned to the client.

The **BackToFrontServerModule** will register an HttpInterceptor this time it will any get requests check for any cached responses with a matching URL and shortcut return the cached response if it exists (it will be deleted afterwards to avoid blocking subsequent requests).

### Using the universal service

```typescript
import { StateService } from 'ngx-back-to-front';

export class AppComponent {

  constructor(
    private stateService: StateService    
  ) { }
}
```

This service has twmo methods: 

**IsBrowser** will return true if running in browser and false for all other environments
**isFirstRouteLoaded** will return true if the current url is the first route loaded.

### Using the state service

```typescript
import { UniversalService } from 'ngx-back-to-front/lib/universal.service';

export class AppComponent {

  constructor(
    private universalService: UniversalService
  ) { }
}
```

The state service is used to get and set state values to be tranfers from server to client.