import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '../../analytics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLang = 'it';
  isDarkMode = false;

  constructor(
    private analytics: AnalyticsService,
    private translate: TranslateService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const savedLang = localStorage.getItem('lang') || 'it';
    this.currentLang = savedLang;
    this.translate.setDefaultLang('it');
    this.translate.use(this.currentLang);

    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    this.applyTheme();
  }

  // === Cambio lingua ===
  switchLanguage() {
    this.currentLang = this.currentLang === 'it' ? 'en' : 'it';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  // === Dark Mode ===
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
    }
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
