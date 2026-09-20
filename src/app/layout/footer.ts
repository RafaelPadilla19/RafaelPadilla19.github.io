import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  public readonly year = new Date().getFullYear();
}
