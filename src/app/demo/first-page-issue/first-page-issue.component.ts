import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-first-page-issue',
  templateUrl: './first-page-issue.component.html',
  styleUrls: ['./first-page-issue.component.scss']
})
export class FirstPageIssueComponent implements OnInit {
  busy: boolean;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.busy = true;

    this.testService.slowResponse(2000)
      .subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}
