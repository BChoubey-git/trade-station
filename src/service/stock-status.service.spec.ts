import { TestBed } from '@angular/core/testing';

import { StockStatusService } from './stock-status.service';

describe('StockStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockStatusService = TestBed.get(StockStatusService);
    expect(service).toBeTruthy();
  });
});
