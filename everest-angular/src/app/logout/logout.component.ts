import { Component } from '@angular/core';
import { AuthService } from '../common/service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'logout-component',
    template: ''
})

export class LogoutComponent {
    constructor(private router: Router, private authService: AuthService) {
        this.authService.removeLoginSession();
        this.router.navigateByUrl('login');
    }
}
