import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetInventory } from './reset-inventory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetInventoryService {

  constructor(private http:HttpClient) { }

  // public getResetInventoriesFromRemote():Observable<ResetInventory[]>{
  //   return this.http.get<ResetInventory[]>('http://localhost:8081/getresetqty');
  // }

  public addResetQtyFromRemote(resetInventory:ResetInventory):Observable<any>{
    return this.http.post<any>('http://localhost:8081/save-reset-qty',resetInventory);
  }

  // public searchResetFromRemote(resetInventory:ResetInventory):Observable<any>{
  //   return this.http.post<any>('http://localhost:8081/search',resetInventory);
  // }

  public deleteResetInventoryFromRemote(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/delete-reset-qty/${id}`);
  }

  public updateResetInventoryFromRemote(id:number,resetInv:ResetInventory):Observable<any>{
    return this.http.put<any>(`http://localhost:8081/update-reset-qty/${id}`,resetInv);
  }
}
