import { Component } from '@angular/core';
import { AnalyticsService } from '../../analytics.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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