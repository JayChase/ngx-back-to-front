import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransferIssueComponent } from './state-transfer-issue.component';

describe('StateTransferIssueComponent', () => {
  let component: StateTransferIssueComponent;
  let fixture: ComponentFixture<StateTransferIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTransferIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransferIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
