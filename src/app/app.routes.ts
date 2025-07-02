import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllservicesComponent } from './allservices/allservices.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'servizi', component: AllservicesComponent },
  { path: '**', redirectTo: '' }, // Per qualsiasi percorso non definito, vai alla home
];