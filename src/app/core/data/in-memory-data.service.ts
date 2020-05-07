import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {customers} from './inmemory-data/customers';
import {products} from './inmemory-data/products';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    return {
      customers,
      products,
    };
  }
}
