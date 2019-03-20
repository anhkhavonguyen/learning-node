import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addValueForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValueForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      gender: [''],
      username: [''],
      password: [''],
      avatar: ['']
    });
  }

  add(): void {
    const firstName = this.addValueForm.get('firstName').value;
    const lastName = this.addValueForm.get('lastName').value;
    const email = this.addValueForm.get('email').value;
    const gender = this.addValueForm.get('gender').value;
    const username = this.addValueForm.get('username').value;
    const password = this.addValueForm.get('password').value;
    const avatar = this.addValueForm.get('avatar').value;

    const newUser: User = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      username: username,
      password: password,
      avatar: avatar,
      id: 1
    };

    this.userService.addUser(newUser)
      .subscribe(
        (data: User) => console.log(data),
        (err: any) => console.log(err),
        () => this.router.navigate(['/books'])
      );
  }
}
