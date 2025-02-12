import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private fb:FormBuilder, private resAppService : RestaurantAppServiceService, private router:Router){
    this.loginform = this.fb.group(
      {
          email: "",
          password:""
      },
      
    );
    localStorage.clear();
  }
  Userlogin(){
    console.log(this.loginform.value)
    this.resAppService.checkLoginUser(this.loginform.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("LoginUserEmail",res[0]?.email)
      this.router.navigateByUrl("/")
    })
  }
}
