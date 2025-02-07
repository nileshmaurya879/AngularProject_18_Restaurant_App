import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAppServiceService {
  http = Inject(HttpClient)
  constructor() { }

  checkLoginUser(Userlogin:any){
    return this.http.post("https://localhost:44323/api/UserRegistration/GetUserLogin",Userlogin)
  }
}
