import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVIZI } from './services.data';

import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
 services = SERVIZI;

 constructor(private router: Router){}

   vaiAiServizi() {
    this.router.navigate(['/servizi']);
  }
 }
