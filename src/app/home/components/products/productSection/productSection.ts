import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AgentArtifact } from '../artifacts/agent-artifact';
import { PipelineArtifact } from '../artifacts/pipeline-artifact';
import { PosArtifact } from '../artifacts/pos-artifact';
import { Product } from '../types/product.types';

import { Reveal } from '../../../../common/directives/reveal';

/**
 * Lamina de un producto. Cada una ocupa un peldaño distinto de la escalera —claro,
 * morado vivo, morado profundo— asi que la serie se lee como progresion y no como
 * repeticion. Cada variante se escribe como cadena literal completa para que Tailwind
 * la detecte en el build.
 */
@Component({
  selector: 'app-product-section',
  imports: [RouterLink, PosArtifact, AgentArtifact, PipelineArtifact, Reveal],
  templateUrl: './productSection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSection {
  readonly product = input.required<Product>();

  /** Posicion en el listado, desde 1. */
  readonly index = input.required<number>();

  protected readonly indexLabel = computed(() => String(this.index()).padStart(2, '0'));

  /** El primero es claro; los otros dos suben por la escalera. */
  protected readonly isLight = computed(() => this.index() === 1);

  protected readonly sheetClass = computed(() => {
    switch (this.index()) {
      case 2:
        return 'bg-brand';
      case 3:
        return 'bg-deep';
      default:
        return 'bg-paper';
    }
  });

  protected readonly headingClass = computed(() => (this.isLight() ? 'text-ink' : 'text-white'));

  protected readonly bodyClass = computed(() => (this.isLight() ? 'text-muted' : 'text-pale'));

  protected readonly eyebrowClass = computed(() => (this.isLight() ? 'text-brand' : 'text-white'));

  protected readonly badgeClass = computed(() =>
    this.isLight() ? 'bg-tint text-brand' : 'bg-white/15 text-white',
  );

  protected readonly linkClass = computed(() =>
    this.isLight()
      ? 'bg-brand text-white hover:bg-vivid'
      : 'bg-white text-ink hover:bg-pale',
  );

  /** Numeral gigante de fondo: ordena la serie sin ocupar espacio de lectura. */
  protected readonly ghostClass = computed(() =>
    this.isLight() ? 'text-brand/[0.08]' : 'text-white/[0.08]',
  );

  protected readonly dotsClass = computed(() => (this.isLight() ? 'dots-ink' : ''));

  /**
   * Tres candidatas para la foto: 340w cubre el render de escritorio a 1x, 560w el
   * de movil a densidades altas y 680w el 2x de escritorio.
   */
  protected readonly photoSrcset = computed(() =>
    this.product()
      .photo.sources.map((fuente) => `${fuente.src} ${fuente.width}w`)
      .join(', '),
  );

  protected readonly artifactOrderClass = computed(() =>
    this.index() % 2 === 0 ? 'lg:order-first' : 'lg:order-last',
  );
}
