import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor() { }
  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, data);
      console.log(data," is saved with key ",key);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
