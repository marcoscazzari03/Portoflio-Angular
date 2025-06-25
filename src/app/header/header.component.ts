import { Component } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private analytics: AnalyticsService) {}

  goToGithub() {
    this.analytics.event('click_github', {
      event_category: 'social_link',
      event_label: 'GitHub Profile'
    });

    window.open('https://github.com/marcoscazzari03/', '_blank', 'noopener,noreferrer');
  }

  goToLinkedin() {
    this.analytics.event('click_linkedin', {
      event_category: 'social_link',
      event_label: 'LinkedIn Profile'
    });

    const newWindow = window.open('https://www.linkedin.com/in/marco-scazzari/', '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  openMail() {
    this.analytics.event('click_email', {
      event_category: 'social_link',
      event_label: 'Email Link'
    });

    window.location.href = 'mailto:marcoscazzari03@gmail.com';
  }
}