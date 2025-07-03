import { Directive, HostListener, Input } from '@angular/core';

declare let gtag: Function;

@Directive({
  selector: '[gaEvent]',
  standalone: true
})
export class GaEventDirective {
  @Input('gaEventCategory') category: string = 'default_category';
  @Input('gaEventAction') action: string = 'click';
  @Input('gaEventLabel') label: string = '';

  @HostListener('click')
  onClick() {
    gtag('event', this.action, {
      event_category: this.category,
      event_label: this.label
    });
  }
}
