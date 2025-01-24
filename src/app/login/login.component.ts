import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform:FormGroup;


  constructor(private fb:FormBuilder){
    this.loginform = this.fb.group(
      {
          email: "",
          password:""
      },

    );
  }
  Userlogin(){
    console.log(this.loginform.value)
  }
}
