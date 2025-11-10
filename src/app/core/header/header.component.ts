import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '../../analytics.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule], // ✅ aggiunto TranslateModule per pipe e servizio
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentLang = 'it';

  constructor(
    private analytics: AnalyticsService,
    private translate: TranslateService
  ) {
    // ✅ Carica la lingua salvata
    const savedLang = localStorage.getItem('lang') || 'it';
    this.currentLang = savedLang;
    this.translate.setDefaultLang('it');
    this.translate.use(this.currentLang);
  }

  // === Cambio lingua ===
  switchLanguage() {
    this.currentLang = this.currentLang === 'it' ? 'en' : 'it';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  // === Link esterni ===
  goToGithub() {
    this.analytics.openGithub();
  }

  goToLinkedin() {
    this.analytics.openLinkedin();
  }

  openMail() {
    this.analytics.openEmail();
  }
}
