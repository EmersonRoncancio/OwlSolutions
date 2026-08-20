import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../types/product.types';

/**
 * Presentational block for a single product. Every theme variant is written as a
 * full literal class string so Tailwind can detect it at build time.
 */
@Component({
  selector: 'app-product-section',
  imports: [RouterLink],
  templateUrl: './productSection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSection {
  readonly product = input.required<Product>();

  protected readonly sectionClass = computed(() => {
    switch (this.product().theme) {
      case 'dark':
        return 'bg-ink';
      case 'tint':
        return 'bg-tint';
      default:
        return 'bg-white';
    }
  });

  protected readonly headingClass = computed(() =>
    this.product().theme === 'dark' ? 'text-white' : 'text-ink',
  );

  protected readonly bodyClass = computed(() =>
    this.product().theme === 'dark' ? 'text-mist' : 'text-muted',
  );

  protected readonly eyebrowClass = computed(() =>
    this.product().theme === 'dark' ? 'text-lilac' : 'text-brand',
  );

  /** Background used by the check bullets and the use-case callout. */
  protected readonly softClass = computed(() => {
    switch (this.product().theme) {
      case 'dark':
        return 'bg-white/10';
      case 'tint':
        return 'bg-white';
      default:
        return 'bg-tint';
    }
  });

  protected readonly checkClass = computed(() =>
    this.product().theme === 'dark' ? 'bg-white/10 text-lilac' : 'bg-tint text-brand',
  );

  protected readonly ringClass = computed(() =>
    this.product().theme === 'dark' ? 'border-white/15' : 'border-line',
  );

  protected readonly haloClass = computed(() => {
    switch (this.product().theme) {
      case 'dark':
        return 'bg-white/5';
      case 'tint':
        return 'bg-white/70';
      default:
        return 'bg-tint';
    }
  });

  protected readonly dotClass = computed(() =>
    this.product().theme === 'dark' ? 'bg-lilac/50' : 'bg-brand/50',
  );

  protected readonly ringDotClass = computed(() =>
    this.product().theme === 'dark' ? 'border-lilac/40' : 'border-brand/40',
  );

  /**
   * The mockup never renders wider than 440px, so a 680w original was up to 4x the
   * pixels desktop actually paints. Two candidates cover 1x desktop and hi-dpi.
   */
  protected readonly imageSrcset = computed(() => {
    const image = this.product().image;
    return `${image.webpSmall} 340w, ${image.webp} 680w`;
  });

  protected readonly imageOrderClass = computed(() =>
    this.product().imageFirst ? 'lg:order-first' : 'lg:order-last',
  );
}
