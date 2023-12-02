import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { AppModule } from './app.module';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;

  constructor(private authService: SocialAuthService) {}

  async ngOnInit(): Promise<void> {
    // Attempt to login using token
    const token = window.localStorage.getItem('token');
    if (token) {
      const response: Response = await fetch('http://localhost:3000/login', {
        headers: {
          token: `${token}`,
        },
      });
      const data = await response.json();
      if (!data.error) this.user = data;
    }

    // Login handler
    this.authService.authState.subscribe(async (user) => {
      if (this.user) return;
      const response: Response = await fetch('http://localhost:3000/register', {
        headers: {
          id_token: `${user.idToken}`,
        },
      });
      this.user = await response.json();
      localStorage.setItem('token', `${this.user.token}`);
    });
  }
}
