import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { Inventory } from 'src/app/inventory';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent {

  inventories:Inventory[];
  ngOnInit() {
     this.getInventories();
  }

  constructor(private router:Router, private regservice:RegistrationService){

  }
public getInventories(){
  this.regservice.getInventoriesFromRemote().subscribe(data=>this.inventories=data);
}

public deleteInventoryFromRemote(id:number){
  this.regservice.deleteInventoryFromRemote(id).subscribe(
    data=>{
      console.log('data deleted');
      this.router.navigate(['/admin/home'])
    },
    error=>{
      console.log('data not deleted');
      
    }
  )
}

public updateInventoryFromRemote(id:number){
  this.router.navigate(['/update',id])
}

}
