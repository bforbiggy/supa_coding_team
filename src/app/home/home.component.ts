import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent {
  //we are taking reponse from steam using the api
  steamResponse: string = 'No response yet';

  constructor() { 
    this.loadReviews();
  }

  async loadReviews() {
    const apiUrl = 'https://localhost:3000/';
    const response = await fetch(apiUrl);
    const data = await response.text();
    this.steamResponse = data;
  }

  ngOnInit(): void {
  }
}
