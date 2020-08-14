import { Component } from '@angular/core';
import { AuthService } from './common/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'everest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router, private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
