import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffMemberComponent } from './add-staff-member.component';

describe('AddStaffMemberComponent', () => {
  let component: AddStaffMemberComponent;
  let fixture: ComponentFixture<AddStaffMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStaffMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
