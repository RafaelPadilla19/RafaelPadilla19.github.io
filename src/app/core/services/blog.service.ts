import { Injectable, signal, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: number;
  imageUrl?: string;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Migrando mi portafolio a Angular v21+',
    excerpt: 'Descubre cómo modernicé mi portafolio personal utilizando las últimas características de Angular, como Signals y Control Flow.',
    content: '<p>Contenido detallado próximamente...</p>',
    date: '2026-02-20',
    category: 'Desarrollo Web',
    readTime: 5,
    imageUrl: 'img/portfolio/Portfolio-01.png'
  },
  {
    id: 2,
    title: 'La importancia del diseño Mobile First en 2026',
    excerpt: 'Un análisis sobre por qué comenzar el diseño desde pantallas pequeñas garantiza una mejor experiencia de usuario y rendimiento.',
    content: '<p>Contenido detallado próximamente...</p>',
    date: '2026-01-15',
    category: 'UI/UX',
    readTime: 3
  },
  {
    id: 3,
    title: 'Desarrollo Backend: .NET vs Java Spring Boot',
    excerpt: 'Mi experiencia trabajando con ambos ecosistemas para aplicaciones empresariales.',
    content: '<p>Contenido detallado próximamente...</p>',
    date: '2025-11-10',
    category: 'Backend',
    readTime: 8
  }
];

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  public postsResource = rxResource({
    params: () => ({}),
    stream: () => {
      // Simula petición HTTP de 400ms
      return of(MOCK_POSTS).pipe(delay(400));
    }
  });

  public getPostById(id: number): BlogPost | undefined {
    // Si los recursos ya cargaron, busco en la memoria
    const posts = this.postsResource.value();
    if (posts && Array.isArray(posts)) {
      return posts.find((p: BlogPost) => p.id === id);
    }
    return undefined;
  }
}
