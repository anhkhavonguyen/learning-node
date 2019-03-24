import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [SignInComponent, SignOutComponent, SignUpComponent]
})
export class AuthModule { }
