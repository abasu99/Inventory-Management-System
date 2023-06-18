import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  user=new User();
  msg='';
  constructor(private regService:RegistrationService, private router:Router){}
  
  ngOnInit() {
    
  }
  

  register(){
    this.regService.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.router.navigate(['/login']);

      },
      error=>{
        console.log("error");
        this.msg='User already registered !!';

      }
    )

  }

}
