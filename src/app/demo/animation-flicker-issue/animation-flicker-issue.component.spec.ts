import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFlickerIssueComponent } from './animation-flicker-issue.component';

describe('AnimationFlickerIssueComponent', () => {
  let component: AnimationFlickerIssueComponent;
  let fixture: ComponentFixture<AnimationFlickerIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFlickerIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFlickerIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
