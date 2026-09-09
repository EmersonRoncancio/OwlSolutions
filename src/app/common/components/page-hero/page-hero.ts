import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
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

  /**
   * Marca la volanta como nombre de producto y no como categoria. En las paginas de
   * Zemli, Soy Alondra y Mesa Origen ahi va la marca, y merece leerse como tal; en
   * las otras seis es una etiqueta («Blog», «Contacto») que debe quedarse discreta.
   */
  readonly eyebrowIsProductName = input(false, { transform: booleanAttribute });
  readonly heading = input.required<string>();
  readonly lead = input.required<string>();
  readonly highlights = input<readonly string[]>([]);
  readonly ctaLabel = input('Agenda una demo');
  readonly ctaHref = input('https://wa.me/573007810339');
  readonly secondaryLabel = input<string | null>(null);
  readonly secondaryPath = input<string | null>(null);
}
