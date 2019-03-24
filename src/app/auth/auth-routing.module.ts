import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{
    path: 'sign-out',
    pathMatch: 'full',
    component: SignOutComponent
},
{
    path: 'sign-in',
    pathMatch: 'full',
    component: SignInComponent
},
{
    path: 'sign-up',
    pathMatch: 'full',
    component: SignUpComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
