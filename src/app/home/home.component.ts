import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent {
  name: String = "";
  
  constructor() { 
    this.loadGame();
  }

  async loadGame() {
    // Load game name
    const response = await fetch('http://localhost:3000/steamgame');
    const data = await response.json();
    this.name = data.name;
    //U guys can check the console to find review, it's for our testing purpose, should be fine tho
    console.log(data.reviews);
  }

  ngOnInit(): void {
  }
}
