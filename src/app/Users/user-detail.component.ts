import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { User }         from './user';
import { UserService }  from '../Services/user.service';



@Component({
  selector: 'user-detail',
  templateUrl: 'app/Users/user-detail.component.html',
  styleUrls: [ 'app/Users/user-detail.component.css' ]
})

export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {

      this.route.params
      .switchMap((params: Params) => this.userService.getUserID(params['user_id']))
      .subscribe(user =>  this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.userService.update(this.user)
    .then(() => this.goBack());
  }
}

