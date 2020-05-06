import { TestBed } from '@angular/core/testing';

import { CascadeSelectService } from './cascade-select.service';

describe('CascadeSelectService', () => {
  let service: CascadeSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadeSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
