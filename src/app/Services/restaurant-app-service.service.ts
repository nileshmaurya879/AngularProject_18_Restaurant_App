import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAppServiceService {

  constructor(private http:HttpClient) { }

  checkLoginUser(Userlogin:any){
    return this.http.postt("https://localhost:44323/api/UserRegistration/GetUserLogin",)
  }
}
