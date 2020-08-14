import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    isLoginError = false;
    @ViewChild('usernameInput', { static: false }) usernameInput: ElementRef;

    constructor(public router: Router, public authService: AuthService) { }

    ngOnInit() {
        this.authService.removeLoginSession();
    }

    login(): void {
        this.isLoginError = false;
        if (this.username === 'admin' && this.password === 'password') {
            this.authService.setLoginSession(this.username, this.password);
            this.router.navigateByUrl('dashboard');
        } else {
            this.isLoginError = true;
        }
    }
}

