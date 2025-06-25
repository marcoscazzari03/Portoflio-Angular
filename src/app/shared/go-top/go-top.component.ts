import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-go-top',
  standalone: true,
  imports: [NgIf],
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.css'],
})
export class GoTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 20;
  }

  goTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}