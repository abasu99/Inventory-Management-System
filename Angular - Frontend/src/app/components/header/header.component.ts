import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  name=localStorage["name"];
  ngOnInit() {
   
  }
  constructor(private route:Router){}

  isAdmin(){
    return localStorage["role"]==="ROLE_ADMIN";
  }
  
  logOut(){
    this.route.navigate(['/login']);
    localStorage.clear();
    
  }
  home(){
    this.route.navigate(['/home'])
  }

}
