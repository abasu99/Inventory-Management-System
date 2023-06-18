import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetInventoryService } from 'src/app/reset-inventory.service';
import { ResetInventory } from 'src/app/reset-inventory';

@Component({
  selector: 'app-search-reset-qty',
  templateUrl: './search-reset-qty.component.html',
  styleUrls: ['./search-reset-qty.component.css']
})
export class SearchResetQtyComponent implements OnInit{
  resetInventory=new ResetInventory();

  msg='';

  ngOnInit(): void {
    
  }

  constructor(private route:Router, private resetinvservice:ResetInventoryService){

  }

  // searchResetQty(){
  //   this.resetinvservice.searchResetFromRemote(this.resetInventory).subscribe(
  //     data=>{
  //       this.resetInventory=data;
  //       this.msg=`Reset Quantity: ${this.resetInventory.resetQty}`;
  //     },
  //     error=>{
  //       console.log('Inventory not found');
  //       this.msg='Inventory not found. Add a new one'
  //     }
  //   )
  // }

}
