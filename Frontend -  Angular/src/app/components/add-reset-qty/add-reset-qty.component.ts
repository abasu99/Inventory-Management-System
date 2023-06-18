import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ResetInventory } from 'src/app/reset-inventory';
import { ResetInventoryService } from 'src/app/reset-inventory.service';

@Component({
  selector: 'app-add-reset-qty',
  templateUrl: './add-reset-qty.component.html',
  styleUrls: ['./add-reset-qty.component.css']
})
export class AddResetQtyComponent implements OnInit{
  errorMsg='';
  ngOnInit(): void {
    
  }
  resetInventory=new ResetInventory();
  constructor(private resetInvService:ResetInventoryService,private router:Router){}

  addResetQty(){
    this.resetInvService.addResetQtyFromRemote(this.resetInventory).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/admin/home'])
      },
      error=>{
        console.log(error);
        // this.errorMsg='Please add inventory first'
        this.errorMsg=error.error.message;
      }
    )
  }

}
