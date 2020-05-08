import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './inmemory-data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'api/products';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
