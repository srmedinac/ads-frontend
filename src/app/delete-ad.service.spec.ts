import { TestBed, inject } from '@angular/core/testing';

import { DeleteAdService } from './delete-ad.service';

describe('DeleteAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteAdService]
    });
  });

  it('should be created', inject([DeleteAdService], (service: DeleteAdService) => {
    expect(service).toBeTruthy();
  }));
});
