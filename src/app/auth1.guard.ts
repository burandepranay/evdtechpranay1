import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  constructor(private auth : AuthService) {}
  canActivate(){
    if(this.auth.isLoggedIn()) {
      return true
    } else {
      return false
    }
  }
  
}

