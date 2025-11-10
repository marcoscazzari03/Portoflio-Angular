import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Type } from '@angular/core';

import { GoTopComponent } from '../../shared/go-top/go-top.component';
import { HERO_LINKS } from './hero-links';
import { GaEventDirective } from '../../directives/ga-event.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GoTopComponent, NgFor, GaEventDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  links = HERO_LINKS;

  texts: string[] = ['web developer', 'web designer', 'seo specialist', 'sistemista', 'backend developer'];
  currentText = '';
  currentWordIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  static HeaderComponent: readonly any[] | Type<any>;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const fullText = this.texts[this.currentWordIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
      this.currentText = fullText.substring(0, this.currentCharIndex);
    } else {
      this.currentCharIndex++;
      this.currentText = fullText.substring(0, this.currentCharIndex);
    }

    let typingSpeed = this.isDeleting ? 75 : 100;

    if (!this.isDeleting && this.currentCharIndex === fullText.length) {
      // Pausa alla fine della parola
      typingSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      // Passa alla parola successiva
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.texts.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }
}
