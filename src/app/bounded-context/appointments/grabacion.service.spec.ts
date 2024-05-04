import { TestBed } from '@angular/core/testing';

import { GrabacionService } from './grabacion.service';

describe('GrabacionService', () => {
  let service: GrabacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrabacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
