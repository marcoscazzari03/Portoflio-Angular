import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div class="scroll-progress-bar">
      <div class="scroll-progress" [style.width.%]="scrollProgress"></div>
    </div>
  `,
  styleUrls: ['./scroll-progress.component.css']
})
export class ScrollProgressComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }
}
