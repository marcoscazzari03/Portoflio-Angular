import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string; 
}
@Component({
  selector: 'app-list-services',
  standalone: true,
  imports: [RouterModule, CommonModule],  // importante se è standalone
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-brands fa-wordpress',
      title: 'Wordpress web design',
      description: `Realizzo siti WordPress personalizzati, ottimizzati per i motori di ricerca e pensati per offrire un'ottima esperienza utente. Ti aiuto a creare un sito WordPress funzionale, intuitivo e visivamente curato.`,
      link: '/wordpress',  // usa path Angular
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Ottimizzazione SEO',
      description: `Sono un consulente di marketing digitale e SEO con l'obiettivo di aiutare le aziende a sviluppare la loro presenza online, ottenere risultati concreti e crescere in modo sostenibile.`,
      link: '/seo',
    },
    {
      icon: 'fa-solid fa-ruler-combined',
      title: 'Progettazione e sviluppo web',
      description: `Ho esperienza consolidata nella creazione di siti WordPress e nello sviluppo di temi riconosciuti per qualità, funzionalità e design innovativo.`,
      link: '/web',
    },
    {
      icon: 'fa-solid fa-sheet-plastic',
      title: 'Contenuti e copywriting',
      description: `Realizzo contenuti e copy efficaci, ottimizzati SEO, che rafforzano l’identità del brand, coinvolgono il pubblico e migliorano la comunicazione su web e social.`,
      link: '/copywriting',
    },
    {
      icon: 'fa-solid fa-pen',
      title: 'User experience design',
      description: `Utilizzo le migliori tecnologie disponibili, unendo rigore e competenza, per creare un sito web efficace e apprezzato dai tuoi utenti.`,
      link: '/uxui',
    },
    {
      icon: 'fa-solid fa-paintbrush',
      title: 'Branding & design visivo',
      description: `Ho supportato blogger, aziende, enti e startup nella creazione di una presenza online efficace e nel raggiungimento dei loro obiettivi digitali.`,
      link: '/design',
    }
  ];
}