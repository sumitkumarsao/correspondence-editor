import { Injectable } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../model/common.model';

@Injectable()
export class AuthService {
    @SessionStorage('username') public username: string;
    @SessionStorage('password') public password: string;

    constructor(private httpClient: HttpClient) { }

    generatePdfDocument(request: Details): Observable<boolean> {
        return this.httpClient.post<boolean>('http://localhost:9090/everest-controller/public/generate-pdf', request);
    }

    setLoginSession(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    removeLoginSession() {
        this.username = null;
        this.username = null;
    }

    isLoggedIn(): boolean {
        if (this.username && this.password) {
            return true;
        } else {
            return false;
        }
    }
}
