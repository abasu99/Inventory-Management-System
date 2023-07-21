import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { RegistrationService } from 'src/app/registration.service';
import { Inventory } from 'src/app/inventory';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  order=new Order();
  id: number;
  totalOrderQty=0;
  inventory=new Inventory();
  msg='';
  minusQty=0;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.regservice.getInventoryById(this.id).subscribe(data => {
      this.inventory = data;
    }, error => console.log(error));
 
  }
  constructor(private orderservice:OrderService, 
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private regservice:RegistrationService){}


  placeOrder(){
    this.order.locationNbr=this.inventory.locationNbr;
    this.order.materialId=this.inventory.materialId;
    this.totalOrderQty=this.inventory.orderQty+this.order.orderQty;
    this.inventory.orderQty=this.totalOrderQty;

    

    this.orderservice.placeOrderFromRemote(this.order).subscribe(
      data=>{
        console.log('order placed');
        this.route.navigate(['/orders'])
       
      },
      error=>{
        console.log(error);
        //this.msg='Cannot place Order';
      }
    )

    this.regservice.updateInventoryFromRemote(this.id, this.inventory).subscribe( data =>{
     console.log('order qty updated');
     
    },
    error => console.log(error));
    // this.msg='Cannot place Order';
  }

}
