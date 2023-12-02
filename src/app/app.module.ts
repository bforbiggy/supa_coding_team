import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule, // Import FormsModule here
    LoginModule,
  ],
  exports: [],
  bootstrap: [],
})
export class AppModule {}
