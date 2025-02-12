import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent {
  loginUserEmail:string = "";
  
  constructor(){
    var loginUser =  localStorage.getItem("LoginUserEmail")
    this.loginUserEmail = loginUser ? loginUser : "";
    console.log(loginUser)
    console.log(this.loginUserEmail)
  }
}
