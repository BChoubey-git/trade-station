import { TestBed } from '@angular/core/testing';

import { StockRendererService } from './stock-renderer.service';

describe('StockRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockRendererService = TestBed.get(StockRendererService);
    expect(service).toBeTruthy();
  });
});
