import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupform:FormGroup;
  constructor(private fb:FormBuilder){
    this.signupform = this.fb.group (
      {
        UserName:"",
        email:"",
        password:""
      }
    )
  }
  UserSignUp(){
    console.log(this.signupform.value)
    console.log("************")
  }
}
