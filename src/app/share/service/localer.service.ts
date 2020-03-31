import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {


  constructor() { }
  saveLocalStorage(obj: object, name: string) {
    localStorage.setItem(name, JSON.stringify(obj));
  }

  getLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  saveSessionStorage(obj: object, name: string) {
    sessionStorage.setItem(name, JSON.stringify(obj));
  }

  getSessionStorage(name: string) {
    return JSON.parse(sessionStorage.getItem(name));
  }
}
