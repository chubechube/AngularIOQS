import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import {FormsModule }       from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NglModule }        from 'ng-lightning/ng-lightning';


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';
import { UsersComponent }           from './Users/users.component';
import { UserService}               from './Services/user.service';
import { UserSearchComponent }      from './Users/user-search.component';
import { SpellsService  }           from './Services/SpellsService';
import { SelectSpell}  from './Spells/selectSpell';
import { UserDetailComponent }      from './Users/user-detail.component'
import { CharactherPanel }          from './CharacterPanel/characterPanel'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    NglModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserSearchComponent,
    SelectSpell,
    UserDetailComponent,
    CharactherPanel
  ],
  providers: [ UserService,SpellsService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }