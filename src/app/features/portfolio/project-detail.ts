import { Component, computed, inject, signal, effect, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService, Project } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html'
})
export default class ProjectDetail {
  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  public projectId = signal<number>(0);

  public project = computed<Project | undefined>(() => {
    if (!this.portfolioService.projectsResource.value()) return undefined;
    return this.portfolioService.getProjectById(this.projectId());
  });

  public safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project()?.videoUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  public isLoading = computed(() => this.portfolioService.projectsResource.isLoading());

  public selectedScreenshot = signal<string | null>(null);
  public activeScreenshot = signal<string | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectId.set(id);

    effect(() => {
      const proj = this.project();
      if (proj?.screenshots?.length && !this.activeScreenshot()) {
        this.activeScreenshot.set(proj.screenshots[0]);
      }
      if (proj) {
        this.titleService.setTitle(`${proj.title} | Rafael Padilla`);
        this.metaService.updateTag({ name: 'description', content: proj.description });
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedScreenshot()) {
      this.closeLightbox();
    }
  }

  setActiveScreenshot(url: string): void {
    this.activeScreenshot.set(url);
  }

  selectScreenshot(url: string): void {
    this.selectedScreenshot.set(url);
  }

  closeLightbox(): void {
    this.selectedScreenshot.set(null);
  }
}
