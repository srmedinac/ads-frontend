import { TestBed, inject } from '@angular/core/testing';

import { CreateAdService } from './create-ad.service';

describe('CreateAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAdService]
    });
  });

  it('should be created', inject([CreateAdService], (service: CreateAdService) => {
    expect(service).toBeTruthy();
  }));
});
