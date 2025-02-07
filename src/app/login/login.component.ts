import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestaurantAppServiceService } from '../Services/restaurant-app-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform:FormGroup;
  //http = inject(HttpClient);

  constructor(private fb:FormBuilder, private resAppService : RestaurantAppServiceService){
    this.loginform = this.fb.group(
      {
          email: "",
          password:""
      },

    );
  }
  Userlogin(){
    console.log(this.loginform.value)
    ///this.resAppService.checkLoginUser(this.Userlogin)
  }
}
