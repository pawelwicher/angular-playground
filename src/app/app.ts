import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    RouterModule
  ],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/">Post list</a>
      <a routerLink="/post-form">Post form</a>
    </nav>
    <router-outlet />
  `,
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  `,
})
export class App {

  protected title = 'Angular Playground';

}
