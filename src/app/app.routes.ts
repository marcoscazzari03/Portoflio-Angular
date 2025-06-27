import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/services/services.component';
import { ProjectsComponent } from './home/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servizi', component: ServicesComponent },
  { path: 'progetti', component: ProjectsComponent },
];