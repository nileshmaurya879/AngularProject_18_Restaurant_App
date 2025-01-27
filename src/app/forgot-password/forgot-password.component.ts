import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
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
