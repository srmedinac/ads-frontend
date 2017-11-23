import { TestBed, inject } from '@angular/core/testing';

import { ListAdsService } from './list-ads.service';

describe('ListAdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAdsService]
    });
  });

  it('should be created', inject([ListAdsService], (service: ListAdsService) => {
    expect(service).toBeTruthy();
  }));
});
