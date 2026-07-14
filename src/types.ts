export type PageType = 'home' | 'sosial' | 'pendidikan' | 'kesehatan' | 'kemandirian' | 'tentang';

export interface TimelineEvent {
  yearRange: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'sosial' | 'pendidikan' | 'kesehatan' | 'kemandirian';
  link: PageType;
}
