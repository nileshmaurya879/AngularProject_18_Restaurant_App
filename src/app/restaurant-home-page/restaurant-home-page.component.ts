import { Component } from '@angular/core';
import { RestaurantDashboardComponent } from "../restaurant-dashboard/restaurant-dashboard.component";

@Component({
  selector: 'app-restaurant-home-page',
  standalone: true,
  imports: [RestaurantDashboardComponent],
  templateUrl: './restaurant-home-page.component.html',
  styleUrl: './restaurant-home-page.component.css'
})
export class RestaurantHomePageComponent {

}
