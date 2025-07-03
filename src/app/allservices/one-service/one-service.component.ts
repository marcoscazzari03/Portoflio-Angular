import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../core/header/header.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { SERVICES_DATA } from './one-service-data';

interface ServiceContent {
  heading?: string;
  text: string;
  cssClass?: string;
}
interface ServiceData {
  title: string;
  description: string;
  icon: string;
  content: ServiceContent[];
}

@Component({
  selector: 'app-one-service',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './one-service.component.html',
  styleUrl: './one-service.component.css',
})
export class OneServiceComponent implements OnInit {
  serviceId!: string;
  data!: ServiceData;

  private servicesMap: { [key: string]: ServiceData } = SERVICES_DATA

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('serviceId') || '';
      this.data = this.servicesMap[this.serviceId] || {
        title: 'Servizio non trovato',
        description: '',
        icon: '',
        content: [],
      };
    });
  }
}
