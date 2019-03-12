import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../../shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.userService.getUsers()
      .subscribe(
        (res: any) => this.users = res.data
      );
  }

}
