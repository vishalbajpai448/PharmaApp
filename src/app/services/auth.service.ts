import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isAdmin = false;

  constructor() { }

  login(username:string, password:string)
  {
    if(username === 'admin' && password === 'admin')
    {
      this.isLoggedIn = true;
      this.isAdmin = true;
      return true;
    } 
    else if(username === 'guest' && password === 'guest')
    {
      this.isLoggedIn = true;
      this.isAdmin  = false;
      return true;
    }
    return false;
  }

  isAuthenticated():boolean
  {
    return this.isLoggedIn;
  }

  isAdminUser():boolean
  {
    return this.isAdmin;
  }

  logout()
  {
    this.isAdmin = false;
    this.isLoggedIn = false;
  }
}
