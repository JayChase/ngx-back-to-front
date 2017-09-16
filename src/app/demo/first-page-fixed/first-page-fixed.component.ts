import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { UniversalService } from '../../back-to-front/universal.service';

@Component({
  selector: 'app-first-page-fixed',
  templateUrl: './first-page-fixed.component.html',
  styleUrls: ['./first-page-fixed.component.scss']
})
export class FirstPageFixedComponent implements OnInit {
  busy: boolean;
  isFirstLoad: boolean;
  isBrowser: boolean;

  constructor(
    private testService: TestService,
    private universalService: UniversalService
  ) { }

  ngOnInit() {
    this.isBrowser = this.universalService.isBrowser();
    this.isFirstLoad = this.universalService.isFirstRouteLoaded();
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
