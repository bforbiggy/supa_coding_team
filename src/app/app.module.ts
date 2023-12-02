import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule, // Import FormsModule here
    LoginModule,
    CommonModule,
  ],
  exports: [],
  bootstrap: [],
})
export class AppModule {}
