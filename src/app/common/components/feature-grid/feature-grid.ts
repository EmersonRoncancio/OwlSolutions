import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Feature {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-feature-grid',
  imports: [],
  templateUrl: './feature-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureGrid {
  readonly heading = input.required<string>();
  readonly intro = input<string | null>(null);
  readonly features = input.required<readonly Feature[]>();
  /** Renders the H3 titles as an ordered list of steps instead of a plain grid. */
  readonly numbered = input(false);
  readonly tint = input(false);
}
