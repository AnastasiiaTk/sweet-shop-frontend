import { TestBed } from '@angular/core/testing';

import { BasketUUIDService } from './basket-uuid.service';

describe('BasketUUIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketUUIDService = TestBed.get(BasketUUIDService);
    expect(service).toBeTruthy();
  });
});
