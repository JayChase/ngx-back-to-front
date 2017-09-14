import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-animation-flicker-issue',
  templateUrl: './animation-flicker-issue.component.html',
  styleUrls: ['./animation-flicker-issue.component.scss'],
  animations: [
    trigger('fade', [
        state('in', style({ opacity: 1 })),
        transition('void => *', [
            style({ opacity: 0 }),
            group([
                animate('2000ms ease', style({
                    opacity: 1
                }))
            ])
        ]),
        transition('* => void', [
            group([
                animate('2000ms ease', style({
                    opacity: 0
                }))
            ])
        ])
    ])
]
})
export class AnimationFlickerIssueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
