import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-staff-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-staff-member.component.html',
  styleUrl: './add-staff-member.component.css'
})
export class AddStaffMemberComponent {
  isOpen: boolean = false;

  showModal: boolean = false;

  openModal() {
    console.log("hell")
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
