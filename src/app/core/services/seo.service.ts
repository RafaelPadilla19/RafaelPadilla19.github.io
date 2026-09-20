import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoTags {
  title: string;
  description: string;
  /** Ruta relativa dentro del sitio, p. ej. 'blog/4'. */
  path?: string;
  /** Ruta relativa de la imagen, p. ej. 'img/blog/cover.svg'. */
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  tags?: string[];
}

const ORIGIN = 'https://rafaelpadilla19.github.io';
const DEFAULT_IMAGE = 'img/og-cover.png';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  public update(tags: SeoTags): void {
    const url = `${ORIGIN}/${(tags.path ?? '').replace(/^\//, '')}`;
    // Las portadas SVG no las renderizan los crawlers de LinkedIn ni WhatsApp.
    const clean = tags.image?.replace(/^\//, '').split('?')[0];
    const rawImage = clean && !clean.endsWith('.svg') ? clean : DEFAULT_IMAGE;
    const image = `${ORIGIN}/${rawImage}`;

    this.title.setTitle(`${tags.title} | Rafael Padilla`);

    this.set('name', 'description', tags.description);
    this.set('property', 'og:title', tags.title);
    this.set('property', 'og:description', tags.description);
    this.set('property', 'og:url', url);
    this.set('property', 'og:image', image);
    this.set('property', 'og:type', tags.type ?? 'website');
    this.set('name', 'twitter:title', tags.title);
    this.set('name', 'twitter:description', tags.description);
    this.set('name', 'twitter:image', image);

    if (tags.type === 'article' && tags.publishedAt) {
      this.set('property', 'article:published_time', tags.publishedAt);
      this.set('property', 'article:author', 'Rafael Padilla');
    } else {
      this.meta.removeTag("property='article:published_time'");
      this.meta.removeTag("property='article:author'");
    }

    this.setCanonical(url);
  }

  private set(attr: 'name' | 'property', key: string, value: string): void {
    this.meta.updateTag({ [attr]: key, content: value }, `${attr}='${key}'`);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
