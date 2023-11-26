import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent,

  ],
  imports: [
    FormsModule, // Import FormsModule here
  ],
  exports:[SearchBarComponent],
  bootstrap: [SearchBarComponent]
})
export class AppModule { }