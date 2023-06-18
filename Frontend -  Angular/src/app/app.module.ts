import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxSpinnerModule } from "ngx-spinner";  
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserHomeComponent } from './components/user-home/user-home.component'
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './components/update-inventory/update-inventory.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { AddResetQtyComponent } from './components/add-reset-qty/add-reset-qty.component';
import { SearchResetQtyComponent } from './components/search-reset-qty/search-reset-qty.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { SearchInventoryComponent } from './components/search-inventory/search-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AddInventoryComponent,
    UpdateInventoryComponent,
    ViewInventoryComponent,
    AddResetQtyComponent,
    SearchResetQtyComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    HeaderUserComponent,
    PlaceOrderComponent,
    AdminOrdersComponent,
    EditOrderComponent,
    SearchInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
