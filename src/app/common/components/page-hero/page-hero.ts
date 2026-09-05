import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';


/** Cabecera clara reutilizada por cada landing interna. Sostiene el H1 de la pagina. */
@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  templateUrl: './page-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly lead = input.required<string>();
  readonly highlights = input<readonly string[]>([]);
  readonly ctaLabel = input('Agenda una demo');
  readonly ctaHref = input('https://wa.me/573007810339');
  readonly secondaryLabel = input<string | null>(null);
  readonly secondaryPath = input<string | null>(null);
}
