import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // public email: string;
  // public password: string;

  //user=new User()


  constructor(private http:HttpClient) { }


  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login',user);
  }

   //private baseUrl='http://localhost:8081/inventories';

  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/register',user);
  }

  public getInventoriesFromRemote():Observable<Inventory[]>{
    return this.http.get<Inventory[]>('http://localhost:8081/inventories');
  }
  
  public addInventoryFromRemote(inventory:Inventory):Observable<any>{
    return this.http.post<any>('http://localhost:8081/save',inventory);
  }

  public deleteInventoryFromRemote(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/delete/${id}`);
  }

  public updateInventoryFromRemote(id:number,inventory:Inventory):Observable<any>{
    return this.http.put<any>(`http://localhost:8081/update/${id}`,inventory);
  }

  public getInventoryById(id: number): Observable<Inventory>{
    return this.http.get<Inventory>(`http://localhost:8081/inventories/${id}`);
  }

  // public getUserFromRemote(userid:number):Observable<User>{
  //   return this.http.get<User>(`${this.baseUrl}/${userid}`);
  // }
}