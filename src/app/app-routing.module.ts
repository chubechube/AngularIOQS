import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { UserDetailComponent }  from './Users/user-detail.component'
import { SelectCharactherClassNG } from './Spells/select-charachter-classNG'

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',               component: DashboardComponent },
 { path: 'pathfinderUserDetails',   component: UserDetailComponent},
 { path: 'spells',                  component: SelectCharactherClassNG }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
