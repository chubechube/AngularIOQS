import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule }    from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { BsDropdownModule } from 'ng2-bootstrap';
import {NglModule} from 'ng-lightning/ng-lightning';


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './Heroes/heroes.component';
import { HeroDetailComponent }  from './Heroes/hero-detail.component';
import { HeroService }          from './Heroes/hero.service';
import { HeroSearchComponent }  from './Heroes/hero-search.component';
import { UsersComponent }       from './Users/users.component';
import { UserService}           from './Users/user.service';
import { UserSearchComponent }  from './Users/user-search.component';
import { SpellsService  }       from './Spells/SpellsService';
import { SelectCharactherClassNG } from './Spells/select-charachter-classNG';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    FlexLayoutModule,
    //BsDropdownModule.forRoot(),
    NglModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    UsersComponent,
    UserSearchComponent,
    SelectCharactherClassNG
  ],
  providers: [ HeroService ,UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }