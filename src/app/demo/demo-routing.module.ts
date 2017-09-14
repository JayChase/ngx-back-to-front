import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateTransferIssueComponent } from './state-transfer-issue/state-transfer-issue.component';
import { FirstPageIssueComponent } from './first-page-issue/first-page-issue.component';
import { AnimationFlickerIssueComponent } from './animation-flicker-issue/animation-flicker-issue.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
