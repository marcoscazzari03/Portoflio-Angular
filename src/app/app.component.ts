import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';
import { ScrollProgressComponent } from "./shared/scroll-progress/scroll-progress.component";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CookieBannerComponent, ScrollProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mouseX = 0;
  mouseY = 0;
  tooltipElement: HTMLElement | null = null;
  tooltipTimeout: any = null;

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 🔹 Google Analytics tracking
        gtag('config', 'G-K77R71FWFY', {
          page_path: event.urlAfterRedirects,
        });

        // 🔹 Scroll automatico in cima a ogni cambio pagina
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'top', `${this.mouseY - 30}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${this.mouseX + 10}px`);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey && ['c', 'u', 'p', 's'].includes(event.key.toLowerCase())) {
      event.preventDefault();
      this.showFloatingTooltip('Accesso Negato');
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    this.showFloatingTooltip('Accesso Negato');
  }

  showFloatingTooltip(message: string): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      clearTimeout(this.tooltipTimeout);
    }

    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(tooltip, text);

    this.renderer.setStyle(tooltip, 'position', 'fixed');
    this.renderer.setStyle(tooltip, 'top', `${this.mouseY - 30}px`);
    this.renderer.setStyle(tooltip, 'left', `${this.mouseX + 10}px`);
    this.renderer.setStyle(tooltip, 'background', '#ff4d4f');
    this.renderer.setStyle(tooltip, 'color', '#fff');
    this.renderer.setStyle(tooltip, 'padding', '6px 12px');
    this.renderer.setStyle(tooltip, 'border-radius', '6px');
    this.renderer.setStyle(tooltip, 'font-size', '14px');
    this.renderer.setStyle(tooltip, 'pointer-events', 'none');
    this.renderer.setStyle(tooltip, 'z-index', '9999');
    this.renderer.setStyle(tooltip, 'box-shadow', '0 2px 6px rgba(0,0,0,0.2)');
    this.renderer.setStyle(tooltip, 'animation', 'fade-in 0.2s ease');

    this.tooltipElement = tooltip;
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.tooltipTimeout = setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }
    }, 2500);
  }
}
