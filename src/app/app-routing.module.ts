import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './Heroes/heroes.component';
import { HeroDetailComponent }  from './Heroes/hero-detail.component';
import { SelectCharactherClassNG } from './Spells/select-charachter-classNG'

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'detail/:id', component: HeroDetailComponent },
 { path: 'heroes',     component: HeroesComponent },
 { path: 'spells',     component: SelectCharactherClassNG }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
