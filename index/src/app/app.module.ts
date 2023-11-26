import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routes';


// Decorator to mark this class as an NgModule
@NgModule({
  // Declarations: Components, directives, and pipes belonging to this module
  declarations: [

    // Other components, directives, pipes...
  ],
  // Imports: Other modules whose exported classes are needed by the components in this module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule


    // Other imported modules...
  ],
  // Providers: Services available to this module and its components
  providers: [
    // Services...
  ],
  // Bootstrap: The main application view, called the root component, that hosts all other app views
  bootstrap: []
})
// Exporting the class AppModule as an NgModule
export class AppModule { }