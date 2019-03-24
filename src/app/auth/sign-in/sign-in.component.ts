import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    constructor(private authService: AuthService,
        private router: Router) { }

    username: string;
    password: string;

    ngOnInit() {
    }

    signIn(): void {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(["users"]);
        } else {
            alert("Invalid credentials");
        }
    }
}

