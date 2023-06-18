import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-search-inventory',
  templateUrl: './search-inventory.component.html',
  styleUrls: ['./search-inventory.component.css']
})
export class SearchInventoryComponent implements OnInit {

  inventory=new Inventory();
  msg='';
  constructor(private orderService:OrderService,private router:Router){}
  ngOnInit() {
  
  }
  public searchByLocation(locationNbr:number,materialId:String){
    this.orderService.searchInventoryFromRemote(locationNbr,materialId).subscribe(
      data=>{
        console.log(data);
        this.inventory=data;
      },
      error=>{
        this.msg=error.error.message;
      }
    )
  }

  public placeOrderByLocation(id:number){
    this.router.navigate(['/user/placeorder',id]);
  }

}
