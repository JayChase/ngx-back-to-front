import { Component, PLATFORM_ID, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { StateService } from '../../back-to-front/state.service';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-state-transfer-issue',
  templateUrl: './state-transfer-issue.component.html',
  styleUrls: ['./state-transfer-issue.component.scss']
})
export class StateTransferIssueComponent implements OnInit {
  post: any;

  constructor(
    private testService: TestService,
    private stateService: StateService
  ) {
    // to create this issue clear the cache before the service call and put a delay on the resonse to make it obvious
    this.stateService.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  ngOnInit() {
    this.testService.getPost(1)
      .delay(2000)
      .subscribe(result => {
        this.post = result;

      }, error => {
        console.log(error);
      });
  }
}
