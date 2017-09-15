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

## Using the universal service



## Using the state service