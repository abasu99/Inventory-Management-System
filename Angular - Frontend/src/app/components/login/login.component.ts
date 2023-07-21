import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user=new User();
  // email:string;
  // password:string;
  msg='';
  emailid='';
  obj=new User();
  constructor(private regService:RegistrationService, private router:Router){}
  
  ngOnInit() {
    
  }
  
  loginUser(){

    this.regService.loginUserFromRemote(this.user).subscribe(
      data=>{
       
        console.log(data);
        this.obj=data;
        localStorage.setItem("role",this.obj.usertype);
        localStorage.setItem("name",this.obj.name);
        localStorage.setItem("loggedInUser",this.user.email);

        this.router.navigate(['/home']);


        // if(localStorage["role"]==="ROLE_ADMIN"){
        //       this.router.navigate(['/admin/home']);}
        //       else{
        //         //this.emailid=this.user.name;
        //         this.router.navigate(['/user/home'])
        //       }
    },
      error=> {console.log("error");
      this.msg="Incorrect credentials !!";
  }
    )
  }

  

}
