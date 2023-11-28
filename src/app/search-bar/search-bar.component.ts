import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  items: any[] = []; // Your list of items
  filteredItems: any[] = [];
  searchTerm: string = '';

  constructor() {
    // Fetch or initialize your items array here
    this.items = [
      { name: 'cs2' },
      { name: 'club penguin' },
      { name: 'pico park'}
      // Other items
    ];
    this.filteredItems = this.items; // Initially set filteredItems to all items
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onItemClick(item: any) {
    // Implement what happens when an item from suggestions is clicked (e.g., select the item, perform an action, etc.)
    console.log('Selected Item:', item);
    this.searchTerm = item.name; // Set search term when an item is clicked (optional)
    this.filteredItems = []; // Clear the suggestions after selection (optional)
  }
}
