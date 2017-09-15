import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFlickerFixedComponent } from './animation-flicker-fixed.component';

describe('AnimationFlickerFixedComponent', () => {
  let component: AnimationFlickerFixedComponent;
  let fixture: ComponentFixture<AnimationFlickerFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFlickerFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFlickerFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
