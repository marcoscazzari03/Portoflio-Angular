import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SERVICE_GROUPS } from './heroservices.data';

interface ServiceLink {
  icon: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-heroservices',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroservices.component.html',
  styleUrls: ['./heroservices.component.css'],
})
export class HeroServicesComponent {
  @Input() title = 'Servizi';
  @Input() subtitle = 'Tutto ciò che faccio ci aiuta a crescere insieme!';
  @Input()
  description = `Progetto e realizzo siti web e identità visive con un approccio strategico e un’estetica curata, pensati per
lasciare il segno e generare emozioni. Scopri l’intera gamma di servizi digitali per capire come posso
aiutarti a far crescere la tua presenza online.`;

  @Input() serviceGroups: ServiceLink[][] = SERVICE_GROUPS;
}
