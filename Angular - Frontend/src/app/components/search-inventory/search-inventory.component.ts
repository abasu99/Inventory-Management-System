import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-search-inventory',
  templateUrl: './search-inventory.component.html',
  styleUrls: ['./search-inventory.component.css']
})
export class SearchInventoryComponent implements OnInit {

  inventory=new Inventory();
  msg='';
  searchBy='';
  results:Inventory[];
  msgLoc='';

  constructor(private orderService:OrderService,private router:Router,private regService:RegistrationService){}
  ngOnInit() {
  
  }

  isAdmin(){
    return localStorage["role"]==="ROLE_ADMIN";
  }
  
  public searchByLocationAndMaterial(locationNbr:number,materialId:String){
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

  public searchByLocation(locationNbr:number){
    this.orderService.searchByLocationFromRemote(locationNbr).subscribe(
      data=>{
        console.log(data);
        this.results=data;
      },
      error=>{
        this.msgLoc=error.error.message;
      }
    )
  }

  public updateInventory(id:number){
    this.router.navigate(['/update',id])
  }

  public deleteInventory(id:number){
    this.regService.deleteInventoryFromRemote(id).subscribe(
      data=>{
        alert('Inventory deleted');
        location.reload();
      },
      error=>{
        console.log(error);
        
      }
    )

  }
  public placeOrderByLocation(id:number){
    this.router.navigate(['/placeorder',id]);
  }

}
