import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Reveal } from '../../../common/directives/reveal';


@Component({
  selector: 'app-cta',
  imports: [RouterLink, Reveal],
  templateUrl: './cta.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {}
