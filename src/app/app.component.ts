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
   </nav>
   <router-outlet></router-outlet>
   <a href="http:\\127.0.0.1:32769/users">Visit W3Schools</a>
 `

})
export class AppComponent {
  title = 'Tour of Heroes';
}
