import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { UniversalService } from '../../back-to-front/universal.service';

@Component({
  selector: 'app-animation-flicker-fixed',
  templateUrl: './animation-flicker-fixed.component.html',
  styleUrls: ['./animation-flicker-fixed.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition('void => in', [
        style({ opacity: 0 }),
        group([
          animate('2000ms ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('in => void', [
        group([
          animate('2000ms ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AnimationFlickerFixedComponent implements OnInit {
  constructor(
    private universalService: UniversalService
  ) { }
  state: string | undefined;

  ngOnInit() {
    if (!this.universalService.isFirstRouteLoad()) {
      console.log('state we are in');
      this.state = 'in';
    }
  }

}
