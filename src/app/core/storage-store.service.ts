import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageStoreService {
  constructor() { }

  get<T>(key: string): T  {
    return JSON.parse(localStorage.getItem(key));
  }

  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

}
