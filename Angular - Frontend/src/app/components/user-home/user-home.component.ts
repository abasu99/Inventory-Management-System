import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Inventory } from 'src/app/inventory';
import { User } from 'src/app/user';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user=new User();
  //u=''
  inventories:Inventory[];
ngOnInit() {
   this.getInventories();
}

constructor(private router:Router, private regservice:RegistrationService){

}

isAdmin(){
  return localStorage["role"]==="ROLE_ADMIN";
}

public getInventories(){
this.regservice.getInventoriesFromRemote().subscribe(data=>this.inventories=data);
}

public placeOrder(id:number){
  this.router.navigate(['/placeorder',id]);
}

public updateInventory(id:number){
  this.router.navigate(['/update',id])
}

public deleteInventory(id:number){
  this.regservice.deleteInventoryFromRemote(id).subscribe(
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
