import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';
import { ResetInventoryService } from 'src/app/reset-inventory.service';
import { ResetInventory } from 'src/app/reset-inventory';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})

export class AddInventoryComponent implements OnInit {
  errorMsg='';
  inventory=new Inventory();
  resetInventory=new ResetInventory();
  ngOnInit(){
  
  }

  constructor(private regservice:RegistrationService,
    private router:Router,
    private resetInvService:ResetInventoryService){

  }

  add(){
    this.regservice.addInventoryFromRemote(this.inventory).subscribe(
      data=>{
        console.log(data);
        alert('Inventory added');
        this.router.navigate(['/home'])
      },
      error=>{
        console.log('error');
        this.errorMsg=error.error.message;
      }
    )

    this.resetInventory.id=this.inventory.id;
    this.resetInventory.locationNbr=this.inventory.locationNbr;
    this.resetInventory.materialId=this.inventory.materialId;
    this.resetInventory.resetQty=this.inventory.resetQty;

    this.resetInvService.addResetQtyFromRemote(this.resetInventory).subscribe(
      data=>{
        console.log(data)
      },
      error=>{console.log(error)}
    )

  }

}
