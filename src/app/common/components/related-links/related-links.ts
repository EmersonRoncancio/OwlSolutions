import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface RelatedLink {
  readonly label: string;
  readonly path: string;
  readonly description: string;
}

/** Contextual internal links that connect a page with its neighbouring intents. */
@Component({
  selector: 'app-related-links',
  imports: [RouterLink],
  templateUrl: './related-links.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedLinks {
  readonly heading = input('Sigue explorando');
  readonly links = input.required<readonly RelatedLink[]>();
}
