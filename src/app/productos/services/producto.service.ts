import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) { }


  getProducto (): Observable<Producto[]>{
    return this.http.get<Producto[]>('https://6147d78565467e0017384c11.mockapi.io/Productospetshop');
  }

  getProducto2 (): Observable<Producto[]>{
    return this.http.get<Producto[]>('https://6147d78565467e0017384c11.mockapi.io/Productospetshop/3');
  }
}
