import { Project } from "./project-card/project-model";

export const PROJECTS: Project[] = [
  {
    image: '/assets/images/trend-online.png',
    alt: 'Trend-Online immagine',
    tags: [
      { label: 'WordPress', link: '/servizi/wordpress' },
      { label: 'SEO', link: '/servizi/seo' },
      { label: 'Copywriting', link: '/servizi/copywriting' },
    ],
    title: 'Trend-Online',
    titleLink: '/progetti/tol',
    description: `Gestisco Trend-Online, dove unisco creatività e competenze tecniche in HTML, CSS e
    TypeScript. Mi occupo anche di pubblicità e ho seguito la migrazione da Angular a WordPress.`,
  },
  {
    image: '/assets/images/lefonti-awards.png',
    alt: 'LeFontiAwards immagine',
    tags: [
      { label: 'WordPress', link: '/servizi/wordpress' },
      { label: 'Brending & Design', link: '/servizi/design' },
      { label: 'UX', link: '/servizi/uxui' },
    ],
    title: 'Le Fonti Awards',
    titleLink: 'https://www.lefontiawards.it',
    description: `Gestisco e aggiorno il sito ufficiale lefontiawards.it, migliorando contenuti ed esperienza utente per un evento globale di rilievo nei settori business, legal e finance.`,
  },
  {
    image: '/assets/images/task-manager.png',
    alt: 'LeFontiAwards immagine',
    tags: [
      { label: 'Angular', link: '/servizi/angular' },
      { label: 'Web Design', link: '/servizi/design' },
    ],
    title: 'Task Manager',
    titleLink: 'https://www.lefontiawards.it',
    description: `Durante il corso Udemy ho sviluppato un progetto Angular completo, applicando concetti chiave come componenti, routing e servizi, migliorando le mie competenze pratiche.`,
  },
];
