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
      this.updateConsent('granted');
    } else {
      this.updateConsent('denied');
    }
  }

  acceptCookies() {
    this.showBanner = false;
    localStorage.setItem('cookie_consent', 'true');

    this.updateConsent('granted');
    this.loadAnalytics();
  }

  rejectCookies() {
    this.showBanner = false;
    localStorage.setItem('cookie_consent', 'false');

    this.updateConsent('denied');
  }

  private updateConsent(status: 'granted' | 'denied') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag =
      (window as any).gtag ||
      function (...args: any[]) {
        (window as any).dataLayer.push(args);
      };

    (window as any).gtag('consent', 'update', {
      analytics_storage: status,
    });

    console.log('GA consent updated →', status);
  }

  private loadAnalytics() {
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      console.log('Google Analytics già caricato');
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K77R71FWFY';
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag =
      (window as any).gtag ||
      function (...args: any[]) {
        (window as any).dataLayer.push(args);
      };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', 'G-K77R71FWFY', {
      anonymize_ip: true,
      allow_ad_personalization_signals: false,
    });

    console.log('Google Analytics caricato correttamente');
  }
}
