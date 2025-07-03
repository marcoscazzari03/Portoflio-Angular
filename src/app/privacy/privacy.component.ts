import { Component } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from "../core/footer/footer.component";
import { GoTopComponent } from "../shared/go-top/go-top.component";

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GoTopComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
