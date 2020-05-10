import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './inmemory-data/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl = 'api/customers';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer);
  }

  searchCustomers(term: string): Observable<Customer[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Customer[]>(this.baseUrl, options);
  }
}
