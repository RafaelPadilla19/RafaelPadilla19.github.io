import { Component, computed, inject, signal, effect, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService, BlogPost } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-detail.html'
})
export default class BlogDetail {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  public postId = signal<number>(0);

  public post = computed<BlogPost | undefined>(() => {
    if (!this.blogService.postsResource.value()) return undefined;
    return this.blogService.getPostById(this.postId());
  });

  public isLoading = computed(() => this.blogService.postsResource.isLoading());

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postId.set(id);

    effect(() => {
      const post = this.post();
      if (post) {
        this.titleService.setTitle(`${post.title} | Rafael Padilla`);
        this.metaService.updateTag({ name: 'description', content: post.excerpt });
      }
    });
  }
}
