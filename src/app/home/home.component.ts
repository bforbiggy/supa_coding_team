import { Component } from '@angular/core';
import { SupaAuthService } from '../supaauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  user: any = '';
  reviews: any = [];

  constructor(private supaauth: SupaAuthService) {
    supaauth.updated.subscribe((data) => {
      this.user = supaauth.user;
      this.loadGame();
    });
  }

  async loadGame() {
    // Load game details (random by default)
    const response = await fetch('http://localhost:3000/steamgame', {
      headers: {
        token: this.supaauth.user.token,
      },
    });
    const data = await response.json();
    this.reviews = data.reviews;
  }

  async submitGuess(event: any): Promise<void> {
    let guess = event.target.value;
    const response = await fetch('http://localhost:3000/guess', {
      headers: {
        token: this.supaauth.user.token,
        guess: guess,
      },
    });
    const data = await response.json();

    // Successful guesses require reloading
    if (data.result === true) {
      this.reviews = [];
      this.loadGame();
      event.target.value = 'DINGDING!';
    }
    // Incorrect guesses reset field
    else {
      event.target.value = 'BZZT BZZT!';
    }
  }
}
