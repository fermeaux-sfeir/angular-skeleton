import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    // const user = firebase.auth().currentUser;
    // if (!user || !user.email) {
    //   this.router.navigate(['/auth']);
    //   return false;
    // }
    return true;
  }
}
