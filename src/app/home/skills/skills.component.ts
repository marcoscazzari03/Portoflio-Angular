import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SKILLS } from './skills.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = SKILLS;
}