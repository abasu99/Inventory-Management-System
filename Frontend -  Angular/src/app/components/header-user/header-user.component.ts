import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit{
  name=localStorage["name"];
  ngOnInit() {
   
  }
  constructor(private route:Router){}
  logOut(){
    this.route.navigate(['/login']);
    localStorage.clear();
    
  }
  home(){
    this.route.navigate(['/user/home'])
  }

}
