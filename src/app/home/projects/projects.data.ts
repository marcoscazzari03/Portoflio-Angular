import { Project } from "./project-card/project-model";

export const PROJECTS: Project[] = [
  {
    image: '/assets/images/trend-online.png',
    alt: 'Trend-Online immagine',
    tags: [
      { label: 'projects.tags.wordpress', link: '/servizi/wordpress' },
      { label: 'projects.tags.seo', link: '/servizi/seo' },
      { label: 'projects.tags.copywriting', link: '/servizi/copywriting' }
    ],
    title: 'projects.items.trend.title',
    titleLink: '/progetti/tol',
    description: 'projects.items.trend.description'
  },
  {
    image: '/assets/images/lefonti-awards.png',
    alt: 'LeFontiAwards immagine',
    tags: [
      { label: 'projects.tags.wordpress', link: '/servizi/wordpress' },
      { label: 'projects.tags.design', link: '/servizi/design' },
      { label: 'projects.tags.ux', link: '/servizi/ux' }
    ],
    title: 'projects.items.lefonti.title',
    titleLink: 'https://www.lefontiawards.it',
    description: 'projects.items.lefonti.description'
  },
  {
    image: '/assets/images/task-manager.png',
    alt: 'Task Manager immagine',
    tags: [
      { label: 'projects.tags.angular', link: '/servizi/sviluppo' },
      { label: 'projects.tags.design', link: '/servizi/design' }
    ],
    title: 'projects.items.task.title',
    titleLink: 'https://www.lefontiawards.it',
    description: 'projects.items.task.description'
  }
];
