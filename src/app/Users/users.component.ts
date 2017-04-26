import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'my-users',
  templateUrl: 'app/Users/users.component.html',
  styleUrls: [ 'app/Users/users.component.css' ]
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  

  add(userName: string,userPassword: string,userEmail: string): void {
      userName      = userName.trim();
      userPassword  = userPassword.trim();
      userEmail     = userEmail.trim();
      if (!name) { return; }
      this.userService.create(userName,userPassword,userEmail)
        .then(user => {
          this.users.push(user);
          this.selectedUser = null;
        });
    }


  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
  
  
}

