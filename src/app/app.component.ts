import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestService } from './test.service';
import { StateService } from './back-to-front/state.service';
import './back-to-front/operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  renderLocation: string;
  message: string;

  constructor(
    @Inject(PLATFORM_ID) public platform_id,
    private testService: TestService,
    private stateService: StateService
  ) {
  }

  ngOnInit() {
    this.renderLocation = this.platform_id;

    this.testService.test()
    .backToFront()
      .subscribe(result => {
        this.message = <any> result;
      });
    //  .backToFront();

    this.stateService.set('test', { 'a': '1' });

    const fromServer = this.stateService.get('test');
    this.message = JSON.stringify(fromServer);
    console.log(fromServer);
  }
}
