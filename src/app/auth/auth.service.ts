import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    private handleError(res: HttpErrorResponse) {
        console.error(res);
        return throwError(res.error || 'Server error');
    }
}
