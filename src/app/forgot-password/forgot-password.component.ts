import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgtPasswordForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.forgtPasswordForm = this.fb.group({
      email:"",
      password:""
    })

 
  }
  ForgotPassword(){
      
  }
}
