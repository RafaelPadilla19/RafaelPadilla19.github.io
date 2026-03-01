import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Portfolio {
  public portfolioService = inject(PortfolioService);
}
