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
    this.loadGame(413150);
  }

  async loadGame(app_id: Number) {
    // App headers
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('app_id', `${app_id}`);

    // Load game reviews
    const reviewResponse = await fetch('http://localhost:3000/steamreviews', {
      headers: requestHeaders
    });
    const reviewData = await reviewResponse.json();
    this.reviewCount = reviewData.query_summary.total_reviews;

    // Load game name
    const nameResponse = await fetch('http://localhost:3000/steamname', {
      headers: requestHeaders
    });
    const nameData = await nameResponse.json();
    this.name = nameData[`${app_id}`].data.name;
  }

  ngOnInit(): void {
  }
}
