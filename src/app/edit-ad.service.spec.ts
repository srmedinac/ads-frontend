import { TestBed, inject } from '@angular/core/testing';

import { EditAdService } from './edit-ad.service';

describe('EditAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditAdService]
    });
  });

  it('should be created', inject([EditAdService], (service: EditAdService) => {
    expect(service).toBeTruthy();
  }));
});
