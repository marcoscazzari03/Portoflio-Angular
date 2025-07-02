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
      url: '/wordpress',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Ottimizzazione per i motori di ricerca (SEO)',
      url: '/seo',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'User experience design',
      url: '/uxui',
    },
  ],
  [
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Progettazione e sviluppo web',
      url: '/web',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Branding e design visivo',
      url: '/design',
    },
    {
      icon: 'fa-solid fa-chevron-right',
      text: 'Contenuti e copywriting',
      url: '/copywriting',
    },
  ],
];