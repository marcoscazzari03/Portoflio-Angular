import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);

      fetch('https://formspree.io/f/xblyenoy', {
        method: 'POST',
        body: formPayload,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            this.successMessage =
              'Messaggio inviato con successo! Riceverai il prima possibile una mail di risposta';
            this.contactForm.reset();

            setTimeout(() => (this.successMessage = ''), 5000);
          } else {
            this.successMessage =
              'Errore durante l’invio del messaggio. Riprova.';
          }
        })
        .catch((error) => {
          console.error('Errore invio:', error);
          this.successMessage = 'Errore di connessione. Riprova.';
        });
    }
  }

  showError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
