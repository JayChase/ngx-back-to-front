import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UniversalService } from './universal.service';

describe('UniversalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UniversalService]
    });
  });

  it('should be created', inject([UniversalService], (service: UniversalService) => {
    expect(service).toBeTruthy();
  }));
});
