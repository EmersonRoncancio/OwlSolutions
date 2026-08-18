import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BreadcrumbItem } from '../../seo/seo.types';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumbs {
  readonly items = input.required<readonly BreadcrumbItem[]>();
}
