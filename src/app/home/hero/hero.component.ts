import { Component } from '@angular/core';
import { GoTopComponent } from "../../shared/go-top/go-top.component";
import { NgFor } from '@angular/common';
import { HERO_LINKS } from './hero-links';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GoTopComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  links= HERO_LINKS;
}
