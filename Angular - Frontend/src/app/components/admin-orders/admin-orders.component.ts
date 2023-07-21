import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders:Order[];
orderId: number;
order=new Order();
ngOnInit() {

  this.getOrders();
  
  this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.orderservice.getOrderById(this.orderId).subscribe(
      data=>this.order=data,
      error=>console.log('error'))
}

constructor(private router:Router, private orderservice:OrderService, private activatedRoute:ActivatedRoute){

}

isAdmin(){
  return localStorage["role"]==="ROLE_ADMIN";
}

public getOrders(){

this.orderservice.getOrdersFromRemote().subscribe(data=>this.orders=data);
}



public updateOrder(orderId:number){
  this.router.navigate(['/update-order',orderId]);
}


}
