import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn:'root'
})
export class RouteGuardService implements CanActivate{
    
    isLoggedIn:boolean=false;
    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.isLoggedIn=this.isUserLoggedIn();
        console.log(this.isLoggedIn);
        return this.isLoggedIn;
        
    }

    isUserLoggedIn(){
        if(localStorage['loggedInUser']==null){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
