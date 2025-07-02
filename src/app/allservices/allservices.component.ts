import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from "../core/header/header.component";
import { HeroServicesComponent } from './heroservices/heroservices.component';
import { GoTopComponent } from '../shared/go-top/go-top.component';
import { FooterComponent } from '../core/footer/footer.component';
import { ListServicesComponent } from "./list-services/list-services.component";

@Component({
  selector: 'app-allservices',
  standalone: true,
  imports: [HeaderComponent, HeroServicesComponent, GoTopComponent, FooterComponent, ListServicesComponent],
  templateUrl: './allservices.component.html',
  styleUrl: './allservices.component.css'
})

export class AllservicesComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Servizi | Marco Scazzari');
  }
}