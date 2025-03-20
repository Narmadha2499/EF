import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //RouterOutlet is not working for link

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  
  styleUrl: './app.component.css',
  template: `
     <nav>
       <ul>
         <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
         <li><a routerLink="/employee" routerLinkActive="active">Employee</a></li>
       </ul>
     </nav>
     <router-outlet></router-outlet>
   `
})
export class AppComponent {
  title = 'example';
}