import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
   
  }
  constructor(private route:Router){}
  logOut(){
    this.route.navigate(['/login']);
    localStorage.clear();
    
  }
  home(){
    this.route.navigate(['/admin/home'])
  }

}
