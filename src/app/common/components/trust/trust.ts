import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Reveal } from '../../directives/reveal';


@Component({
  selector: 'app-trust',
  imports: [Reveal],
  templateUrl: './trust.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trust {
  protected readonly clients: readonly string[] = [
    'Fundación Creando Quien Tú Eres',
    'Fundatega',
    'Metodic Business',
  ];
}
