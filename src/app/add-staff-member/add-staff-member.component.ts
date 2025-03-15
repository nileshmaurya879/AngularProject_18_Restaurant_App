import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantAppServiceService } from '../Services/restaurant-app-service.service';
import { StaffMember } from '../Model/staff-member';

@Component({
  selector: 'app-add-staff-member',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './add-staff-member.component.html',
  styleUrl: './add-staff-member.component.css'
})

export class AddStaffMemberComponent {
  isOpen: boolean = false;
  addStaff?:StaffMember

  @Output() staffAdded = new EventEmitter<void>();
constructor(private service:RestaurantAppServiceService ){

}
  openModel = new FormGroup({
      name:new FormControl(""),
      mobileNo: new FormControl(""),
      memberService: new FormControl(""),
      Salary:new FormControl(""),
      Address:new FormControl("")
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
    const addStaff:StaffMember = {
      memberName:this.openModel.value.name ?? '',
      staffAddress:this.openModel.value.Address ?? '',
      memberServices:this.openModel.value.memberService ?? '',
      salary:Number(this.openModel.value.Salary) || 0,
      mobile: Number(this.openModel.value.mobileNo) || 0 
    };

    console.log(this.openModel.value)
    this.service.addStaffMember(addStaff).subscribe((res?:any)=>{
      console.log(res)
      if(res = true){
        this.staffAdded.emit();
          this.closeModal();
      }
    });
  }
}
