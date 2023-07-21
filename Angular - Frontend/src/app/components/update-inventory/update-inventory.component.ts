import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';
import { ResetInventory } from 'src/app/reset-inventory';
import { ResetInventoryService } from 'src/app/reset-inventory.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit{

  id: number;
  inventory=new Inventory();
  resetInventory=new ResetInventory();

  totalQty=0;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.regservice.getInventoryById(this.id).subscribe(data => {
      this.inventory = data;
    }, error => console.log(error));
  }

  constructor(private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private regservice:RegistrationService,
    private resetInvService:ResetInventoryService){

  }
update(){
  
  this.totalQty=this.inventory.resetQty+this.inventory.newQty;
  this.inventory.resetQty=this.totalQty;

  this.regservice.updateInventoryFromRemote(this.id, this.inventory).subscribe( data =>{
    this.router.navigate(['/home'])
  },
  error => console.log(error));

  this.resetInventory.id=this.inventory.id;
    this.resetInventory.locationNbr=this.inventory.locationNbr;
    this.resetInventory.materialId=this.inventory.materialId;
    this.resetInventory.resetQty=this.inventory.resetQty;

  this.resetInvService.updateResetInventoryFromRemote(this.id,this.resetInventory).subscribe(
    data=>{
      console.log(data)
    },
    error=>{console.log(error)}
  )

}
}
