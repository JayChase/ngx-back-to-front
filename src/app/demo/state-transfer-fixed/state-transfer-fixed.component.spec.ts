import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransferFixedComponent } from './state-transfer-fixed.component';

describe('StateTransferFixedComponent', () => {
  let component: StateTransferFixedComponent;
  let fixture: ComponentFixture<StateTransferFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTransferFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransferFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
