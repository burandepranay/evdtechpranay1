import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route : Router) { }


  isLoggedIn() {
    const userDetails = JSON.parse(localStorage.getItem('new'));
    if(userDetails) {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('new')
    this.route.navigate([`/login`])
  }
}
