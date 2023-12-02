import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any;

  async ngOnInit(): Promise<void> {
    // Attempt to login using token
    const token = window.localStorage.getItem('token');
    if (token) {
      const response = await fetch('http://localhost:3000/login', {
        headers: {
          token: `${token}`,
        },
      });
      this.user = await response.json();
    }
  }
}
