import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Mueve al cursor el origen del resplandor de las baldosas `.tile`.
 *
 * Tres decisiones que condicionan la implementacion:
 *
 * 1. Es una mejora progresiva, no el efecto. El hover completo — filete morado,
 *    sombra en capas y resplandor — vive en CSS; sin JavaScript el degradado sale
 *    del centro superior y la tarjeta se siente igual de viva. Aqui solo se
 *    reescriben `--tile-x` y `--tile-y`.
 * 2. Un unico listener delegado en la raiz, no uno por baldosa. Las tarjetas se
 *    crean y destruyen con cada navegacion; delegar evita tener que suscribir y
 *    limpiar cada una.
 * 3. Las escrituras se agrupan en un requestAnimationFrame. `pointermove` puede
 *    disparar varias veces por fotograma y cada `setProperty` invalida el estilo de
 *    la baldosa; con rAF se escribe una sola vez por fotograma.
 */
@Directive({
  selector: '[appTileGlow]',
})
export class TileGlow {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // afterNextRender no corre en el prerenderizado: aqui hay DOM y `window`.
    afterNextRender(() => {
      // En tactil no hay cursor que seguir y el :hover se queda pegado tras el toque,
      // asi que el CSS ya se limita a (hover: hover). Sin puntero no hay nada que hacer.
      if (!window.matchMedia('(hover: hover)').matches) return;

      const raiz = this.host.nativeElement;
      let pendiente = 0;
      let ultima: HTMLElement | null = null;

      const devolverAlCentro = (baldosa: HTMLElement) => {
        baldosa.style.removeProperty('--tile-x');
        baldosa.style.removeProperty('--tile-y');
      };

      const alMover = (evento: PointerEvent) => {
        const objetivo = evento.target;
        if (!(objetivo instanceof Element)) return;

        const baldosa = objetivo.closest<HTMLElement>('.tile');

        // Al cambiar de baldosa la anterior vuelve a su origen: si conservara la
        // ultima posicion del cursor, el proximo hover arrancaria descentrado.
        if (ultima && ultima !== baldosa) devolverAlCentro(ultima);
        ultima = baldosa;

        if (!baldosa || pendiente) return;

        const { clientX, clientY } = evento;
        pendiente = requestAnimationFrame(() => {
          pendiente = 0;
          const caja = baldosa.getBoundingClientRect();
          baldosa.style.setProperty('--tile-x', `${clientX - caja.left}px`);
          baldosa.style.setProperty('--tile-y', `${clientY - caja.top}px`);
        });
      };

      raiz.addEventListener('pointermove', alMover, { passive: true });

      this.destroyRef.onDestroy(() => {
        raiz.removeEventListener('pointermove', alMover);
        if (pendiente) cancelAnimationFrame(pendiente);
      });
    });
  }
}
