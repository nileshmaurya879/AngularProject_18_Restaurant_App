import { Routes } from '@angular/router';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { ChartsDashboardComponent } from './charts-dashboard/charts-dashboard.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';

export const routes: Routes = [

   {
        path:"",
        component:RestaurantDashboardComponent
   },
   {
       path:"knowmore",
       component:KnowmoreComponent
   },
   {
        path:"login",
        component:LoginComponent
   },
   {
        path:"signup",
        component:SignupComponent
   },
   {
        path:"inventory",
        component:InventoryComponent
   },
   {
        path:'menu',
        component:MenuCardComponent
   },
   {
        path:"chart",
        component:ChartsDashboardComponent
   }
];
