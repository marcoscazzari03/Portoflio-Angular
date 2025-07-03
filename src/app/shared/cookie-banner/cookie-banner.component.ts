import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css'],
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  ngOnInit() {
    const consent = localStorage.getItem('cookie_consent');
    this.showBanner = !consent;

    if (consent === 'true') {
      this.loadAnalytics();
    }
  }

  acceptCookies() {
    this.showBanner = false;
    localStorage.setItem('cookie_consent', 'true');

    //comunico l'approvazione a Google Analytics
    this.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });

    this.loadAnalytics();
  }

  rejectCookies() {
    this.showBanner = false;
    localStorage.setItem('cookie_consent', 'false');

    //comunico il rifiuto a Google Analytics
    this.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }

  loadAnalytics() {
    (window as any).dataLayer = (window as any).dataLayer || [];

    const gtag = (...args: any[]) => {
      (window as any).dataLayer.push(args);
    };

    const existingScript = document.querySelector(
      'script[src*="googletagmanager.com/gtag/js"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K77R71FWFY';
      script.async = true;
      document.head.appendChild(script);
    }

    gtag('js', new Date());
    gtag('config', 'G-K77R71FWFY', {
      anonymize_ip: true,
      allow_ad_personalization_signals: false,
    });
  }

  private gtag(command: string, target: string, config?: any): void {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(arguments);
  }
}
