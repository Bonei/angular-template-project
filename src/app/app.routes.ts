import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'como-funciona', 
        loadComponent () {
            return import('./pages/about/about.component').then(
                (m) => m.AboutComponent
            );
        },
    },
    {
        path: 'login', 
        loadComponent () {
            return import('./pages/login/login.component').then(
                (m) => m.LoginComponent
            );
        },
    }
];
