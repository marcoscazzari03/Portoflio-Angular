import { Component } from '@angular/core';
import { AnalyticsService } from '../../analytics.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private analytics: AnalyticsService) {}

  goToLinkedin() {
    this.analytics.openLinkedin();
  }

  goToGithub() {
    this.analytics.openGithub();
  }

  currentYear = new Date().getFullYear();
}
