import { Injectable } from '@angular/core';

declare global {
  interface Window { gtag: (...args: any[]) => void; }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {}

  public event(eventName: string, params: {[key: string]: any} = {}) {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    } else {
      console.warn('Google Analytics non è ancora caricato');
    }
  }
  public openGithub() {
    this.event('click_github', {
      event_category: 'social',
      event_label: 'GitHub Profile'
    });
    window.open('https://github.com/marcoscazzari03', '_blank', 'noopener,noreferrer');
  }

  public openLinkedin() {
    this.event('click_linkedin', {
      event_category: 'social',
      event_label: 'LinkedIn Profile'
    });
    window.open('https://www.linkedin.com/in/marco-scazzari/', '_blank', 'noopener,noreferrer');
  }

  public openEmail() {
    this.event('click_email', {
      event_category: 'contact',
      event_label: 'Email Link'
    });
    window.location.href = 'mailto:marcoscazzari03@gmail.com';
  }
}