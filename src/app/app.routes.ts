import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { OneServiceComponent } from './allservices/one-service/one-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'servizi', component: AllservicesComponent },
  { path: 'servizi/:serviceId', component: OneServiceComponent },
  { path: '**', redirectTo: '' },
];
