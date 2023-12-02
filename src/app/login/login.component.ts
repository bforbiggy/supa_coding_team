import { Component } from '@angular/core';
import { SupaAuthService } from '../supaauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
export class LoginComponent {
  user: any;

  constructor(private supaauth: SupaAuthService) {
    supaauth.updated.subscribe((data) => {
      this.user = supaauth.user;
    });
  }
}
