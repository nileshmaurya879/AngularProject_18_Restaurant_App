import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

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
}
