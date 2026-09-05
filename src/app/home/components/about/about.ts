import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Reveal } from '../../../common/directives/reveal';


interface Differentiator {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, Reveal],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly differentiators: readonly Differentiator[] = [
    {
      title: 'Cumplimiento DIAN garantizado',
      description: 'Facturación electrónica siempre al día con la norma.',
    },
    {
      title: 'Producto propio, no plantillas',
      description: 'Diseñado y mantenido por nuestro propio equipo.',
    },
    {
      title: 'Soporte en español, sin intermediarios',
      description: 'Hablas directo con quien construye el producto.',
    },
    {
      title: 'A la medida cuando lo necesitas',
      description: 'Si tu caso no encaja en un producto, lo construimos.',
    },
  ];
}
