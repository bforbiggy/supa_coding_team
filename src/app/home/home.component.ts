import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: String = '';
  reviews: String = '';

  constructor() {
    this.loadGame();
  }

  async loadGame() {
    // Load game details (random by default)
    const response = await fetch('http://localhost:3000/steamgame');
    const data = await response.json();
    this.name = data.name;
    this.reviews = JSON.stringify(data.reviews);
  }

  // ngOnInit(): void {}
}
