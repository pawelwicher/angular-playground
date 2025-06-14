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
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/posts">Posts</a>
      <a routerLink="/data">Data</a>
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
