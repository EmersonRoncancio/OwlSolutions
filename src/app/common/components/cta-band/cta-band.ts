import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CONTACT_EMAIL, WHATSAPP_URL } from '../../seo/site.config';

import { Reveal } from '../../directives/reveal';


@Component({
  selector: 'app-cta-band',
  imports: [Reveal],
  templateUrl: './cta-band.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBand {
  readonly heading = input.required<string>();
  readonly text = input.required<string>();
  readonly ctaLabel = input('Agendar consulta gratis');

  protected readonly whatsappUrl = WHATSAPP_URL;
  protected readonly contactEmail = CONTACT_EMAIL;
}
