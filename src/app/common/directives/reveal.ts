import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Revela un elemento cuando entra en la ventana.
 *
 * Tres decisiones que condicionan la implementacion:
 *
 * 1. El estado oculto lo pone JavaScript, no el CSS servido. Asi el HTML
 *    prerenderizado se ve completo aunque el script no llegue a ejecutarse — si el
 *    ocultamiento viviera en la hoja de estilos, un fallo de JS dejaria la pagina en
 *    blanco para el visitante y para un rastreador.
 * 2. Lo que ya esta a la vista al cargar no se anima. Ocultarlo despues del primer
 *    pintado produciria un parpadeo, porque el contenido ya se vio.
 * 3. Se observa con IntersectionObserver y se desconecta al revelar: no hay handlers
 *    de scroll compitiendo con el hilo principal.
 */
@Directive({
  selector: '[appReveal]',
})
export class Reveal {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /** Retardo en ms, para escalonar elementos hermanos. */
  readonly appReveal = input(0, { transform: numberAttribute });

  constructor() {
    // afterNextRender no corre en el prerenderizado: aqui hay DOM y `window`.
    afterNextRender(() => {
      const el = this.host.nativeElement;

      // Sin observador no se oculta nada: mas vale sin animacion que con el
      // contenido invisible para siempre.
      if (typeof IntersectionObserver === 'undefined') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (el.getBoundingClientRect().top < window.innerHeight) return;

      const retardo = this.appReveal();
      if (retardo > 0) el.style.setProperty('--reveal-delay', `${retardo}ms`);
      el.classList.add('reveal');

      const observador = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (!entrada.isIntersecting) continue;
            entrada.target.classList.add('reveal--in');
            observador.disconnect();
          }
        },
        // Se dispara cuando el elemento ha entrado un poco, no al rozar el borde.
        { rootMargin: '0px 0px -10% 0px' },
      );

      observador.observe(el);
      this.destroyRef.onDestroy(() => observador.disconnect());
    });
  }
}
