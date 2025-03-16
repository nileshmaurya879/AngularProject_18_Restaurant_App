import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { StaffMember } from '../Model/staff-member';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAppServiceService {
  constructor(private http:HttpClient) { 

  }

  checkLoginUser(Userlogin:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post("https://localhost:44323/api/UserRegistration/GetUserLogin", JSON.stringify(Userlogin), { headers })
  }

  CreateUserRegistration(Userlogin:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post("https://localhost:44323/api/UserRegistration", JSON.stringify(Userlogin), { headers })
  }

  GetAllStaffMember(){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<StaffMember[]>('https://localhost:44323/api/StaffMember')
  }

  addStaffMember(addStaffMember:StaffMember){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post("https://localhost:44323/api/StaffMember", JSON.stringify(addStaffMember), { headers })
  }

  deleteStaffMember(id:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete("https://localhost:44323/api/StaffMember?id="+id.toString(),{ headers })
  }
  updateStaffMember(updateStafmember: StaffMember){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put("https://localhost:44323/api/StaffMember",JSON.stringify(updateStafmember) ,{ headers })
  }

  GetStaffMemberById(id:number){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<StaffMember>('https://localhost:44323/api/StaffMember/GetStaffMemberById?id='+id.toString());
  }

}
