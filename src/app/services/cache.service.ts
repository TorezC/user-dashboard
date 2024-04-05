import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: Map<string, any> = new Map();

  constructor() {}

  get(url: string): any {
    console.log('cache hit');
    return this.cache.get(url);
  }

  clear() {
    this.cache.clear();
  }
}
