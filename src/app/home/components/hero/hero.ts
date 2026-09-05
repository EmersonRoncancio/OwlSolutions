import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Marquee } from '../../../common/components/marquee/marquee';

/** Lamina de portada: degradado de la escalera, con la cinta cerrando el borde. */
@Component({
  selector: 'app-hero',
  imports: [RouterLink, Marquee],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
