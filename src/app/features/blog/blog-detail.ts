import { Component, computed, inject, signal, effect } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, BlogPost } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export default class BlogDetail {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  private sanitizer = inject(DomSanitizer);
  private svgCache = new Map<string, SafeHtml>();

  public postId = signal<number>(0);

  public post = computed<BlogPost | undefined>(() => {
    if (!this.blogService.postsResource.value()) return undefined;
    return this.blogService.getPostById(this.postId());
  });

  public safeSvg(svg: string): SafeHtml {
    let safe = this.svgCache.get(svg);
    if (!safe) {
      safe = this.sanitizer.bypassSecurityTrustHtml(svg);
      this.svgCache.set(svg, safe);
    }
    return safe;
  }

  public isLoading = computed(() => this.blogService.postsResource.isLoading());

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postId.set(id);

    effect(() => {
      const post = this.post();
      if (post) {
        this.seo.update({
          title: post.title,
          description: post.excerpt,
          path: `blog/${post.id}`,
          image: post.imageUrl,
          type: 'article',
          publishedAt: post.date,
          tags: post.tags
        });
      }
    });
  }
}
