import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-staff-member',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-staff-member.component.html',
  styleUrl: './add-staff-member.component.css'
})

export class AddStaffMemberComponent {
  isOpen: boolean = false;
   
  openModel = new FormGroup({
      name:new FormControl("")
  });
  showModal: boolean = false;

  openModal() {
    console.log("hell")
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  addStaffMember(){
    console.log(this.openModel.value)
    alert("hello")
  }
}
