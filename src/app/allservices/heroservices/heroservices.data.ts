export interface ServiceLink {
  icon: string;
  text: string;
  url: string;
}

export const SERVICE_GROUPS: ServiceLink[][] = [
  [
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Progettazione web con Wordpress',
      url: '/servizi/wordpress',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Ottimizzazione per i motori di ricerca (SEO)',
      url: '/servizi/seo',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'User experience design',
      url: '/servizi/ux',
    },
  ],
  [
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Progettazione e sviluppo web',
      url: '/servizi/sviluppo',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Branding e design visivo',
      url: '/servizi/design',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Contenuti e copywriting',
      url: '/servizi/copywriting',
    },
  ],
];