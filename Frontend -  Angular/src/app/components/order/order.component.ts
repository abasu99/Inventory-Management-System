import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Inventory } from 'src/app/inventory';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:Order[];
  order=new Order();
ngOnInit() {
   this.getOrders();
}

constructor(private router:Router, private orderservice:OrderService){

}
public getOrders(){
// this.regservice.getInventoriesFromRemote().subscribe(data=>this.inventories=data);
this.orderservice.getOrdersFromRemote().subscribe(data=>this.orders=data);
}

public cancelOrder(orderId:number){
  //this.order.orderStatus='Cancelled';
  this.orderservice.cancelOrderFromRemote(orderId).subscribe(
    data=>{
      console.log('order cancelled');
      this.getOrders();
      
    }
  )
}

}
