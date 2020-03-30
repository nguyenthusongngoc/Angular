import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {


  constructor() { }
  saveLocalStorage(obj: object) {
    localStorage.setItem('LOCAL', JSON.stringify(obj));
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('LOCAL'));
  }

  saveSessionStorage(obj: object) {
    sessionStorage.setItem('SESSION', JSON.stringify(obj));
  }

  getSessionStorage() {
    return JSON.parse(sessionStorage.getItem('SESSION'));
  }
}
