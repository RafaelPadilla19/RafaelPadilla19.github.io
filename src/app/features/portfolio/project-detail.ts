import { Component, computed, inject, signal, effect } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

  public projectId = signal<number>(0);

  public project = computed<Project | undefined>(() => {
    if (!this.portfolioService.projectsResource.value()) return undefined;
    return this.portfolioService.getProjectById(this.projectId());
  });

  public safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project()?.videoUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  public selectedScreenshot = signal<string | null>(null);
  public activeScreenshot = signal<string | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectId.set(id);

    // Set initial active screenshot when project loads
    effect(() => {
      const proj = this.project();
      if (proj?.screenshots?.length && !this.activeScreenshot()) {
        this.activeScreenshot.set(proj.screenshots[0]);
      }
    });
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
