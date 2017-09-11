import { TestBed, async } from '@angular/core/testing';
import { TestService } from './test.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const mockTestService: any = {
    getPhoto: (id) => { },
    test: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: TestService,
          useValue: mockTestService
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
