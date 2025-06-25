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
}