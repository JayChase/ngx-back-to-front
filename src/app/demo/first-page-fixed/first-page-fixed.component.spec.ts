import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageFixedComponent } from './first-page-fixed.component';

describe('FirstPageFixedComponent', () => {
  let component: FirstPageFixedComponent;
  let fixture: ComponentFixture<FirstPageFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
