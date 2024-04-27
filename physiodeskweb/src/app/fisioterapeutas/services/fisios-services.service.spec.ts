import { TestBed } from '@angular/core/testing';

import { FisiosServicesService } from './fisios-services.service';

describe('FisiosServicesService', () => {
  let service: FisiosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FisiosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
