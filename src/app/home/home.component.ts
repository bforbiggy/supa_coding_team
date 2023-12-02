import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name: string = '';
  reviews: any = '';

  constructor() {
    this.loadGame();
  }

  async loadGame() {
    // Load game details (random by default)
    const response = await fetch('http://localhost:3000/steamgame');
    const data = await response.json();
    this.name = data.name;
    this.reviews = data.reviews;
  }

  ngOnInit(): void {}
}
