import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SupaAuthService {
  user: any;
  token: string | null;
  updated: EventEmitter<any> = new EventEmitter();

  constructor(private authService: SocialAuthService) {
    this.token = localStorage.getItem('token');
    this.login();
    this.authService.authState.subscribe((user) => {
      this.handleGoogleUser(user);
    });
  }

  async handleGoogleUser(user: SocialUser) {
    // Attempt to register using google token
    if (this.user) return;
    const response: Response = await fetch('http://localhost:3000/register', {
      headers: {
        id_token: `${user.idToken}`,
      },
    });
    if (!response.ok) return;
    this.user = await response.json();

    // Login using new tokens
    localStorage.setItem('token', `${this.user.token}`);
    this.token = this.user.token;
    this.login();
  }

  async login() {
    // Retrieve user data with token
    if (!this.token) return;
    const response: Response = await fetch('http://localhost:3000/login', {
      headers: {
        token: `${this.token}`,
      },
    });
    const data = await response.json();
    if (data.error) return;

    this.user = data;
    this.updated.emit('shit happened');
  }
}
