import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { DashboardComponent }       from './dashboard.component';
import { UserDetailComponent }      from './Users/user-detail.component';
import { SelectSpell }  from './Spells/selectSpell';
import { CharactherPanel }          from './CharacterPanel/characterPanel'

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',               component: DashboardComponent },
 { path: 'pathfinderUserDetails',   component: UserDetailComponent},
 { path: 'spells',                  component: SelectSpell },
 { path: 'characterPanel',          component: CharactherPanel    }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
