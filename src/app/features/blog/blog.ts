import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, RouterLink],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Blog {
  public blogService = inject(BlogService);

  constructor() {
    inject(SeoService).update({
      title: 'Blog',
      description: 'Artículos sobre arquitectura de software, IA aplicada al desarrollo, .NET y Angular, con ejemplos de sistemas reales.',
      path: 'blog'
    });
  }
}
