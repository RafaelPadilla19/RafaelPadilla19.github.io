import { Component, input, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html'
})
export class ProjectCard {
  private sanitizer = inject(DomSanitizer);

  public project = input.required<Project>();

  public isVideoActive = signal(false);

  public modalId = computed(() => `modal_${this.project().id}`);

  public safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project().videoUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  public openModal(): void {
    this.isVideoActive.set(true);
    const modal = document.getElementById(this.modalId()) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  public closeModal(): void {
    this.isVideoActive.set(false);
    const modal = document.getElementById(this.modalId()) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }
}
