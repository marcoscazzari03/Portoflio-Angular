import { Component } from '@angular/core';
import { AnalyticsService } from '../../analytics.service';

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
    this.analytics.openGithub();
  }

  goToLinkedin() {
    this.analytics.openLinkedin();
  }

  openMail() {
    this.analytics.openEmail();
}
}