import { Component, OnInit } from '@angular/core';

import { User } from './Users/user'
import { UserService } from './Services/user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  users:  User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(
        p => {
          this.users = p
        })
  }
}
