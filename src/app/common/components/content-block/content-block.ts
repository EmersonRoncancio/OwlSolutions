import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Reveal } from '../../directives/reveal';


export interface ContentBlockLink {
  readonly label: string;
  readonly path: string;
}

/** Prose section with an H2, paragraphs, optional bullets and contextual links. */
@Component({
  selector: 'app-content-block',
  imports: [Reveal],
  templateUrl: './content-block.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBlock {
  readonly heading = input.required<string>();
  readonly paragraphs = input.required<readonly string[]>();
  readonly bullets = input<readonly string[]>([]);
  readonly tint = input(false);
}
