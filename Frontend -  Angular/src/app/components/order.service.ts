import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../inventory';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  public getOrdersFromRemote():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:8082/order/orders');
  }

  public placeOrderFromRemote(order:Order):Observable<any>{
    return this.http.post<any>('http://localhost:8082/order/',order);
  }

  public cancelOrderFromRemote(orderId:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8082/order/cancel/${orderId}`);
  }

  public updateOrderFromRemote(orderId:number,order:Order):Observable<any>{
    return this.http.put<any>(`http://localhost:8082/order/update/${orderId}`,order);
  }

  public getOrderById(orderId: number): Observable<Order>{
    return this.http.get<Order>(`http://localhost:8082/order/${orderId}`);
  }

  public searchInventoryFromRemote(locationNbr:number,materialId:String):Observable<Inventory>{
    return this.http.get<Inventory>(`http://localhost:8081/search/${locationNbr}/${materialId}`);
  }
}
