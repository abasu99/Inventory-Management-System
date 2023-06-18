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
  //  if(this.order.orderStatus==='Cancelled')
  //  this.cancelOrder(this.orderId);
  this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.orderservice.getOrderById(this.orderId).subscribe(
      data=>this.order=data,
      error=>console.log('error'))
}

constructor(private router:Router, private orderservice:OrderService, private activatedRoute:ActivatedRoute){

}
public getOrders(){
// this.regservice.getInventoriesFromRemote().subscribe(data=>this.inventories=data);
this.orderservice.getOrdersFromRemote().subscribe(data=>this.orders=data);
}

public updateOrder(orderId:number){
  this.router.navigate(['/admin/update-order',orderId]);
}

public cancelOrder(orderId:number){
  this.order.orderStatus='Cancelled';
  this.orderservice.updateOrderFromRemote(this.orderId,this.order).subscribe(
    data=>{
      this.router.navigate(['/admin/orders']);
    },
    error=>{

    }
  )
  this.orderservice.cancelOrderFromRemote(orderId).subscribe(
    data=>{
      console.log('order cancelled');
      
    }
  )
}
}
