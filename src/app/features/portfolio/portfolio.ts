import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Portfolio {
  public portfolioService = inject(PortfolioService);

  constructor() {
    inject(SeoService).update({
      title: 'Portafolio',
      description: 'Proyectos de software: ERP/POS Multi-Tenant con facturación electrónica, red social universitaria, herramientas propias en NPM y NuGet.',
      path: 'portfolio'
    });
  }
}
