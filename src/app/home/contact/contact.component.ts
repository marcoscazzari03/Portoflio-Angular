import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // corretto styleUrls
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';  // variabile per messaggio di successo

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      console.log('Messaggio inviato:', this.contactForm.value);
      this.successMessage = 'Messaggio inviato con successo! Grazie per avermi contattato.';
      this.contactForm.reset();
    } else {
      this.successMessage = '';  // cancella messaggio successo se invalidi
    }
  }

  showError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}