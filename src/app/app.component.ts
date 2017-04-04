import { Component } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent { }

@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/spells">Spells</a>
   </nav>
   <router-outlet></router-outlet>
  
 `

})
export class AppComponent {
  title = 'Tour of Heroes';
}
