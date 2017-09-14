import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageIssueComponent } from './first-page-issue.component';

describe('FirstPageIssueComponent', () => {
  let component: FirstPageIssueComponent;
  let fixture: ComponentFixture<FirstPageIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
