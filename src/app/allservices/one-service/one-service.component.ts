import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ServiceData {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-one-service',
  standalone: true,
  imports: [],
  templateUrl: './one-service.component.html',
  styleUrl: './one-service.component.css'
})
export class OneServiceComponent implements OnInit {
  serviceId!: string;
  data!: ServiceData;

  private servicesMap: {[key: string]: ServiceData} = {
    wordpress: {
      title: 'Wordpress Web Design',
      description: 'Realizzo siti WordPress personalizzati, ottimizzati per i motori di ricerca...',
      icon: 'fa-brands fa-wordpress'
    },
    seo: {
      title: 'Ottimizzazione SEO',
      description: 'Sono un consulente di marketing digitale e SEO con l\'obiettivo di aiutare le aziende...',
      icon: 'fa-solid fa-magnifying-glass'
    },
    sviluppo: {
      title: 'Progettazione e sviluppo web',
      description: 'Sono un consulente di marketing digitale e SEO con l\'obiettivo di aiutare le aziende...',
      icon: 'fa-solid fa-ruler-combined'
    },
    copywriting: {
      title: 'Contenuti e copywriting',
      description: 'Sono un consulente di marketing digitale e SEO con l\'obiettivo di aiutare le aziende...',
      icon: 'fa-solid fa-sheet-plastic'
    },
    ux: {
      title: 'User experience design',
      description: 'Sono un consulente di marketing digitale e SEO con l\'obiettivo di aiutare le aziende...',
      icon: 'fa-solid fa-pen'
    },
    design: {
      title: 'Branding & design visivo',
      description: 'Sono un consulente di marketing digitale e SEO con l\'obiettivo di aiutare le aziende...',
      icon: 'fa-solid fa-paintbrush'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('serviceId') || '';
      this.data = this.servicesMap[this.serviceId] || {
        title: 'Servizio non trovato',
        description: '',
        icon: ''
      };
    });
  }
}