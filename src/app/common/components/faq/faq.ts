import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaqItem } from '../../seo/seo.types';

import { Reveal } from '../../directives/reveal';


/** Visible FAQ list. The matching FAQPage schema is emitted by the page through `Seo`. */
@Component({
  selector: 'app-faq',
  imports: [Reveal],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  readonly heading = input('Preguntas frecuentes');
  readonly items = input.required<readonly FaqItem[]>();
}
