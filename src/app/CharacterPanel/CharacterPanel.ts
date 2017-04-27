import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';

import { User }         from '../Users/user';
import { UserService }  from '../Services/user.service';
 
@Component({
  selector: 'CharachterPanel',
  templateUrl: 'app/CharacterPanel/characterPanel.html'
})
export class CharactherPanel implements OnInit{

   user         : User;
   spellLevel   : Array<Number>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,

  ) {}


  ngOnInit(): void {

      this.route.params
      .switchMap((params: Params) => this.userService.getUserID(params['user_id']))
      .subscribe(user =>  {this.user = user; this.spellLevel = new Array(user.playerLevel); })

      
  }
}