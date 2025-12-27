import { Injectable } from '@angular/core';
import jwtDecode from "jwt-decode";

const KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  static hasToken(): boolean {
    return this.getToken() !== null;
  }

  static setToken(token: string): void {
    window.localStorage.setItem(KEY, token);
  }

  static getToken(): string|null {
    return window.localStorage.getItem(KEY);
  }

  static removeToken() {
    window.localStorage.removeItem(KEY);
  }

  static decode() {
    const token = <string> this.getToken();
    return jwtDecode<{nome: string, email: string}>(token);
  }
}
