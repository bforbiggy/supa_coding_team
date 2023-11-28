import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent {
  reviewCount: Number = 0;
  name: String = "";
  
  constructor() { 
    this.loadGame();
  }

  async loadGame() {
    // App headers
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('app_id', '413150');

    // Load game reviews
    const reviewUrl = 'http://localhost:3000/steamreviews';
    const reviewResponse = await fetch(reviewUrl, {
      headers: requestHeaders
    });
    const reviewData = await reviewResponse.json();
    this.reviewCount = reviewData.query_summary.total_reviews;

    // Load game name
    const nameUrl = 'http://localhost:3000/steamname';
    const nameResponse = await fetch(nameUrl, {
      headers: requestHeaders
    });
    const nameData = await nameResponse.json();
    this.name = nameData["413150"].data.name;
  }

  ngOnInit(): void {
  }
}
