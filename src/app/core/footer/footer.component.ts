import { Component } from '@angular/core';
import { AnalyticsService } from '../../analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private analytics: AnalyticsService) {}

  goToLinkedin() {
    this.analytics.openLinkedin();
  }
  goToGithub() {
    this.analytics.openGithub();
  }
}
