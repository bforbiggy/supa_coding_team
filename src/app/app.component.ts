import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { AppModule } from './app.module';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { SupaAuthService } from './supaauth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  user: any;

  constructor(private supaauth: SupaAuthService) {
    supaauth.updated.subscribe((data) => {
      this.user = supaauth.user;
    });
  }
}
