import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit{


  orderStatus = [
    {id: 1, name: "In Progress"},
    {id: 2, name: "Completed"},
    {id: 3, name: "Cancelled"}
 ];


  orderId: number;
  order=new Order();

  id:number;
  inventory=new Inventory();
  minusQty=0;
  
  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.orderservice.getOrderById(this.orderId).subscribe(
      data=>this.order=data,
      error=>console.log('error')
      
    )


    // this.id = this.activatedRoute.snapshot.params['id'];
    // this.regservice.getInventoryById(this.id).subscribe(
    //   data => this.inventory = data,
    //   error => console.log(error));
      
  }

  constructor(private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private orderservice:OrderService){
   

  }
  // public cancelOrder(orderId:number){
  //   this.orderservice.cancelOrderFromRemote(orderId).subscribe(
  //     data=>{
  //       console.log('order cancelled');
        
  //     }
  //   )
  // }
update(){
  // if(this.order.orderStatus=='Cancelled'){
  //     this.cancelOrder(this.orderId);
  // }
  // if(this.order.orderStatus=='In Progress' || this.order.orderStatus=='Completed')
 
  this.orderservice.updateOrderFromRemote(this.orderId,this.order).subscribe(
    data=>{
      this.router.navigate(['/admin/orders']);
    },
    error=>{

    }
  )

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
