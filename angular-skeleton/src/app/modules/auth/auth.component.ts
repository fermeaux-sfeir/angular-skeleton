import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, private ngZone: NgZone, private authService: AuthService) {}

  ngOnInit() {
    firebase
      .auth()
      .getRedirectResult()
      .then(() => {
        if (firebase.auth().currentUser) {
          this.ngZone.run(() => this.router.navigate(['home']));
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  openGoogleAuth() {
    this.authService.doGoogleLogin();
  }
}
