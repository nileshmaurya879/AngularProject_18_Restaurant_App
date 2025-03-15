import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddStaffMemberComponent } from '../add-staff-member/add-staff-member.component';
import { RestaurantAppServiceService } from '../Services/restaurant-app-service.service';
import { StaffMember } from '../Model/staff-member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [RouterLink, AddStaffMemberComponent,CommonModule],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent {
  loginUserEmail:string = "";
  staffMemebr:StaffMember[] = [];
  @ViewChild(AddStaffMemberComponent) addUserModal!: AddStaffMemberComponent;

  constructor(protected ResService: RestaurantAppServiceService){

    var loginUser =  localStorage.getItem("LoginUserEmail")
    this.loginUserEmail = loginUser ? loginUser : "";

    this.refreshStaffList();

  }
  
  OpenStaffMemberModel() {
    console.log("*************")
    this.addUserModal.openModal();
  }
  refreshStaffList() {
    this.ResService.GetAllStaffMember().subscribe((res: StaffMember[]) => {
      this.staffMemebr = res;
      console.log("Staff list updated:", res);
    });
  }

  DeleteStaffMember(){
    console.log("deleted")
  }
}
