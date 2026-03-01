import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Blog {
  public blogService = inject(BlogService);
}
