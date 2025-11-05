## 📁 Struttura del progetto (`src/app/`)

```text
src/app/
│
├── app-routing.module.ts
├── app.component.ts
├── app.component.html
├── app.component.css
│
├── allservices/                        ← Pagina “Servizi”
│   ├── allservices.component.ts
│   ├── allservices.component.html
│   └── allservices.component.css
│
├── core/                               ← Componenti globali (layout)
│   ├── header/                         ← Navbar globale
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.scss
│   │
│   └── footer/                         ← Footer globale
│       ├── footer.component.ts
│       ├── footer.component.html
│       └── footer.component.css
│
├── directives/                         ← Direttive personalizzate
│   └── ga-event.directives.ts
│
├── home/                               ← Pagina principale
│   ├── home.component.ts
│   ├── home.component.html
│   ├── home.component.css
│   │
│   ├── contact/                        ← Sezione “Contatti”
│   │   ├── contact.component.ts
│   │   ├── contact.component.html
│   │   └── contact.component.css
│   │
│   ├── hero/                           ← Sezione introduttiva (Hero)
│   │   ├── hero.component.ts
│   │   ├── hero.component.html
│   │   ├── hero.component.css
│   │   └── hero-links.ts
│   │
│   ├── projects/                       ← Sezione “Progetti”
│   │   ├── projects.component.ts
│   │   ├── projects.component.html
│   │   ├── projects.component.css
│   │   ├── project.data.ts
│   │   │
│   │   └── project-card/               ← Card singolo progetto
│   │       ├── project-card.component.ts
│   │       ├── project-card.component.html
│   │       ├── project-card.component.css
│   │       └── project.model.ts
│   │
│   ├── services/                       ← Sezione “Servizi”
│   │   ├── services.component.ts
│   │   ├── services.component.html
│   │   ├── services.component.css
│   │   └── services.data.ts
│   │
│   ├── skills/                         ← Sezione “Competenze”
│   │   ├── skills.component.ts
│   │   ├── skills.component.html
│   │   ├── skills.component.css
│   │   └── skills.data.ts
│   │
│   └── testimony/                      ← Sezione “Testimonianze”
│       ├── testimony.component.ts
│       ├── testimony.component.html
│       └── testimony.component.css
│
├── privacy/                            ← Pagina Privacy Policy
│   ├── privacy.component.ts
│   ├── privacy.component.html
│   └── privacy.component.css
│
└── shared/                             ← Componenti condivisi
    ├── cookie-banner/                  ← Banner cookie
    │   ├── cookie-banner.component.ts
    │   ├── cookie-banner.component.html
    │   └── cookie-banner.component.scss
    │
    └── gotop/                          ← Pulsante “Torna su”
        ├── go-top.component.ts
        ├── go-top.component.html
        └── go-top.component.scss
