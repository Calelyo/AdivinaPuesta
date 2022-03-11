import { TestBed } from '@angular/core/testing';

import { OroService } from './oro.service';

describe('OroService', () => {
  let service: OroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
