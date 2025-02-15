import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RestaurantAppServiceService } from '../Services/restaurant-app-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupform:FormGroup;
  constructor(private fb:FormBuilder, private restaurantAppService: RestaurantAppServiceService, private router:Router){
    this.signupform = this.fb.group (
      {
        UserName:"",
        Email:"",
        UserPassword:""
      }
    )
  }
  UserSignUp(){
    console.log(this.signupform.value)
    console.log("************")
    this.restaurantAppService.CreateUserRegistration(this.signupform.value).subscribe((res:any)=>{
          alert("Added successfully...")
          this.router.navigateByUrl("/login");
    });
  }
}
