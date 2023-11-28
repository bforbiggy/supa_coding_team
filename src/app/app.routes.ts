
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routeConfig: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent}, // Default route redirects to Home
  { path: 'home', title: 'HomePage', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

export default routeConfig; 
 
