import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  inventory=new Inventory();
  msg='';
  constructor(private orderService:OrderService,private router:Router,private regService:RegistrationService){}
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

  public updateInventory(id:number){
    this.router.navigate(['/admin/update',id])
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


}
