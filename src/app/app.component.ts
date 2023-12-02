import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterModule, RouterOutlet, RouterLink],
  template: `
    <div>
      <header>
        <base href="/" />
      </header>
      <nav>
        <p>Guess That Game!</p>
        <a routerLink="/home">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/login">Login</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
