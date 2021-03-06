import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { UniversalService } from '../../back-to-front/universal.service';

@Component({
  selector: 'app-first-page-issue',
  templateUrl: './first-page-issue.component.html',
  styleUrls: ['./first-page-issue.component.scss']
})
export class FirstPageIssueComponent implements OnInit {
  busy: boolean;
  isBrowser: boolean;

  constructor(
    private testService: TestService,
    private universalService: UniversalService

  ) { }

  ngOnInit() {
    // don't show the wait elements on the server
    this.isBrowser = this.universalService.isBrowser();

    this.busy = true;

    this.testService.slowResponse(4000)
      .subscribe(result => {
        this.busy = false;
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}
