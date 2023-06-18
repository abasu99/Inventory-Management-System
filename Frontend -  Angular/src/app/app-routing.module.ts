import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddResetQtyComponent } from './components/add-reset-qty/add-reset-qty.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchInventoryComponent } from './components/search-inventory/search-inventory.component';
import { SearchResetQtyComponent } from './components/search-reset-qty/search-reset-qty.component';
import { UpdateInventoryComponent } from './components/update-inventory/update-inventory.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { RouteGuardService } from './route-guard-service';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegistrationComponent},

  {path:'user/home', component:UserHomeComponent, canActivate:[RouteGuardService]},
  {path:'user/orders',component:OrderComponent, canActivate:[RouteGuardService]},
  {path:'user/placeorder/:id',component:PlaceOrderComponent, canActivate:[RouteGuardService]},
  {path:'user/search-location',component:SearchInventoryComponent, canActivate:[RouteGuardService]},

  {path:'admin/inventories',component:ViewInventoryComponent, canActivate:[RouteGuardService]},
  {path:'admin/add',component:AddInventoryComponent, canActivate:[RouteGuardService]},
  {path:'admin/update/:id',component:UpdateInventoryComponent, canActivate:[RouteGuardService]},
  {path:'admin/home',component:AdminHomeComponent, canActivate:[RouteGuardService]},
  {path:'admin/addresetqty',component:AddResetQtyComponent, canActivate:[RouteGuardService]},
  {path:'admin/search',component:SearchResetQtyComponent, canActivate:[RouteGuardService]},
  {path:'admin/update-order/:orderId',component:EditOrderComponent, canActivate:[RouteGuardService]},
  {path:'admin/orders',component:AdminOrdersComponent, canActivate:[RouteGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
