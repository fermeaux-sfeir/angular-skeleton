import { Component, NgZone } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  navItems = [
    {
      path: '/home',
      icon: 'home',
      label: 'Home'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private ngZone: NgZone) {}

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.clear();
        this.ngZone.run(() => this.router.navigate(['/auth']));
      })
      .catch(function(error) {
        console.error(error);
      });
  }
}
