import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule }    from '@angular/forms';
import { BsDropdownModule } from 'ng2-bootstrap';




import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { UsersComponent }       from './users/users.component';
import { UserService}           from './users/user.service';
import { UserSearchComponent }  from './users/user-search.component';
import { SelectCharactherClass } from './Spells/select-charachter-class'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    BsDropdownModule.forRoot(),
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
    SelectCharactherClass
  ],
  providers: [ HeroService ,UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }