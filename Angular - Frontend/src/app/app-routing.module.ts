import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { LoginComponent } from './components/login/login.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchInventoryComponent } from './components/search-inventory/search-inventory.component';
import { UpdateInventoryComponent } from './components/update-inventory/update-inventory.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { RouteGuardService } from './route-guard-service';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegistrationComponent},

  {path:'home', component:UserHomeComponent, canActivate:[RouteGuardService]},
  {path:'placeorder/:id',component:PlaceOrderComponent, canActivate:[RouteGuardService]},
  {path:'search',component:SearchInventoryComponent, canActivate:[RouteGuardService]},

  {path:'add',component:AddInventoryComponent, canActivate:[RouteGuardService]},
  {path:'update/:id',component:UpdateInventoryComponent, canActivate:[RouteGuardService]},
  {path:'update-order/:orderId',component:EditOrderComponent, canActivate:[RouteGuardService]},
  {path:'orders',component:AdminOrdersComponent, canActivate:[RouteGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
