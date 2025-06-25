import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  goToLinkedin(): void {
    const newWindow = window.open(
      'https://www.linkedin.com/in/marco-scazzari/',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) {
      newWindow.opener = null; // previene reverse tabnabbing
    }
  }

    goToGithub(): void {
    const newWindow = window.open(
      'https://github.com/marcoscazzari03/',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  openMail(){
    window.location.href='mailto:marcoscazzari03@gmail.com';
  }
}