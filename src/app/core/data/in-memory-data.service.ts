import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {customers} from './inmemory-data/customers';
import {products} from './inmemory-data/products';
import {stages} from './inmemory-data/projects';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    return {
      customers,
      products,
      stages,
    };
  }
}
