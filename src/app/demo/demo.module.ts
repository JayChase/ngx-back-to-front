import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdProgressSpinnerModule } from '@angular/material';

import { DemoRoutingModule } from './demo-routing.module';
import { StateTransferIssueComponent } from './state-transfer-issue/state-transfer-issue.component';
import { FirstPageIssueComponent } from './first-page-issue/first-page-issue.component';
import { AnimationFlickerIssueComponent } from './animation-flicker-issue/animation-flicker-issue.component';

import { TestService } from './test.service';

import { StateTransferFixedComponent } from './state-transfer-fixed/state-transfer-fixed.component';
import { FirstPageFixedComponent } from './first-page-fixed/first-page-fixed.component';
import { AnimationFlickerFixedComponent } from './animation-flicker-fixed/animation-flicker-fixed.component';


@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdProgressSpinnerModule,
    DemoRoutingModule
  ],
  declarations: [
    StateTransferIssueComponent,
    FirstPageIssueComponent,
    AnimationFlickerIssueComponent,
    StateTransferFixedComponent,
    FirstPageFixedComponent,
    AnimationFlickerFixedComponent
  ],
  providers: [
  ]
})
export class DemoModule { }
