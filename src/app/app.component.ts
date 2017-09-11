import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  renderLocation: string;
  message: string;
  photo: any;

  constructor(
    @Inject(PLATFORM_ID) public platform_id,
    private testService: TestService
  ) {
  }

  ngOnInit() {
    this.renderLocation = this.platform_id;

    this.testService.getPhoto(1)
      .subscribe(result => {
        this.photo = result;

      }, error => {
        console.log(error);
      });
  }
}
