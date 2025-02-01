import { TestBed } from '@angular/core/testing';

import { RestaurantAppServiceService } from './restaurant-app-service.service';

describe('RestaurantAppServiceService', () => {
  let service: RestaurantAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
