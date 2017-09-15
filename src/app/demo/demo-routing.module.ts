import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateTransferIssueComponent } from './state-transfer-issue/state-transfer-issue.component';
import { FirstPageIssueComponent } from './first-page-issue/first-page-issue.component';
import { AnimationFlickerIssueComponent } from './animation-flicker-issue/animation-flicker-issue.component';

import { StateTransferFixedComponent } from './state-transfer-fixed/state-transfer-fixed.component';
import { FirstPageFixedComponent } from './first-page-fixed/first-page-fixed.component';
import { AnimationFlickerFixedComponent } from './animation-flicker-fixed/animation-flicker-fixed.component';

const routes: Routes = [
  {
    path: 'state-transfer-issue',
    component: StateTransferIssueComponent
  },
  {
    path: 'first-page-issue',
    component: FirstPageIssueComponent
  },
  {
    path: 'animation-flicker-issue',
    component: AnimationFlickerIssueComponent
  },
  {
    path: 'state-transfer-fixed',
    component: StateTransferFixedComponent
  },
  {
    path: 'first-page-fixed',
    component: FirstPageFixedComponent
  },
  {
    path: 'animation-flicker-fixed',
    component: AnimationFlickerFixedComponent
  },
  {
    path: '',
    redirectTo: 'state-transfer-issue',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: StateTransferIssueComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
