import { TestBed } from '@angular/core/testing';

import { ResetInventoryService } from './reset-inventory.service';

describe('ResetInventoryService', () => {
  let service: ResetInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
