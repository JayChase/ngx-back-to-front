import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestService } from '../test.service';

@Component({
  selector: 'app-state-transfer-issue',
  templateUrl: './state-transfer-issue.component.html',
  styleUrls: ['./state-transfer-issue.component.scss']
})
export class StateTransferIssueComponent implements OnInit {
  photo: any;

  constructor(
    @Inject(PLATFORM_ID) public platform_id,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getPhoto(1)
      .subscribe(result => {
        this.photo = result;

      }, error => {
        console.log(error);
      });

  }

}
