import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestService } from '../test.service';
import { StateService } from '../../back-to-front/state.service';

@Component({
  selector: 'app-state-transfer-fixed',
  templateUrl: './state-transfer-fixed.component.html',
  styleUrls: ['./state-transfer-fixed.component.scss']
})
export class StateTransferFixedComponent implements OnInit {
  post: any;

  constructor(
    @Inject(PLATFORM_ID) public platform_id,
    private testService: TestService,
    private stateService: StateService
  ) {

  }

  ngOnInit() {
    this.testService.getPost(1)
      .subscribe(result => {
        this.post = result;
      }, error => {
        console.log(error);
      });
  }
}

