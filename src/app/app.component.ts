import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  renderLocation: string;

  constructor(
    @Inject(PLATFORM_ID) public platform_id
  ) {
  }

  ngOnInit() {
    this.renderLocation = this.platform_id;
  }
}
