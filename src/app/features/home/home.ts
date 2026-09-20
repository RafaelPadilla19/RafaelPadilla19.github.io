import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Experience } from './components/experience';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {
  constructor() {
    inject(SeoService).update({
      title: 'Senior Software Engineer',
      description: 'Software Engineer con +5 años construyendo sistemas backend escalables, APIs y microservicios para productos fintech y empresariales.',
      path: ''
    });
  }
}
