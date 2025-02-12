import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMemberStaffComponent } from './restaurant-member-staff.component';

describe('RestaurantMemberStaffComponent', () => {
  let component: RestaurantMemberStaffComponent;
  let fixture: ComponentFixture<RestaurantMemberStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantMemberStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMemberStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
