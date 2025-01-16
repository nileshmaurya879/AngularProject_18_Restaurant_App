import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDashboardComponent } from './charts-dashboard.component';

describe('ChartsDashboardComponent', () => {
  let component: ChartsDashboardComponent;
  let fixture: ComponentFixture<ChartsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
