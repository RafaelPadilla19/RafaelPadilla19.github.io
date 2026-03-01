import { Component, signal, ChangeDetectionStrategy, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  menuOpen = signal(false);
  isDarkTheme = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Intentamos recuperar la preferencia del usuario o del sistema
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkTheme.set(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkTheme.set(prefersDark);
      }
      this.updateTheme();
    }
    
    // El efecto reaccionará automáticamente a cambios de isDarkTheme
    effect(() => {
      this.updateTheme();
    });
  }

  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isDarkTheme.set(isChecked);
    if (isPlatformBrowser(this.platformId)) {
       localStorage.setItem('theme', isChecked ? 'dark' : 'light');
    }
  }

  private updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', this.isDarkTheme() ? 'dark' : 'light');
    }
  }

  toggleMenu() {
    this.menuOpen.update(val => !val);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
