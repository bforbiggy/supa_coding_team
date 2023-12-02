import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule, // Import FormsModule here
    LoginModule,
    CommonModule,
    SocialLoginModule,
  ],
  exports: [],
  bootstrap: [],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '728677578017-4q3ceolgs573hfo6av86an7l5lnl8n1n.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
})
export class AppModule {}
