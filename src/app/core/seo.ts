import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  /** relative path e.g. '/lyd' */
  path: string;
  image?: string;
  /** one or more schema.org objects to emit as JSON-LD for this page */
  jsonLd?: object | object[];
}

const SITE_NAME = 'Resonora';
const SITE_URL = 'https://resonora.dk';
const DEFAULT_IMAGE = `${SITE_URL}/logo3.png`;
const JSON_LD_ATTR = 'data-seo-jsonld';

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(data: SeoData): void {
    const fullTitle = `${data.title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${data.path}`;
    const image = data.image ?? DEFAULT_IMAGE;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.updateCanonical(url);
    this.updateJsonLd(data.jsonLd);
  }

  private updateCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private updateJsonLd(jsonLd: object | object[] | undefined): void {
    this.document.querySelectorAll(`script[${JSON_LD_ATTR}]`).forEach((el) => el.remove());

    const items = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    for (const item of items) {
      const script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(JSON_LD_ATTR, '');
      script.textContent = JSON.stringify(item);
      this.document.head.appendChild(script);
    }
  }
}
