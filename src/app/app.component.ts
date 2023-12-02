import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterModule, RouterOutlet],
  template: `
    <div>
      <header></header>
      <nav>
        <p>Guess That Game!</p>
        <a routerLink="/home">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/login">Login</a>
      </nav>
      <router-outlet />
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
