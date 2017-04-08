import { Component, OnInit } from '@angular/core';

import { Hero } from './Heroes/hero';
import { User } from './Users/user'
import { HeroService } from './Heroes/hero.service';
import { UserService } from './Users/user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  users:  User[] = [];

  constructor(private heroService: HeroService, private userService: UserService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));

    //this.userService.getUsers().then(users => this.users = users.slice(0,4));
    this.userService.getAll()
      .subscribe(
        p => {
          this.users = p
        })
  }
}
