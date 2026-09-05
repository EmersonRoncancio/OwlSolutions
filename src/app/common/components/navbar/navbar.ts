import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly links: readonly NavLink[] = [
    { label: 'POS', path: '/pos' },
    { label: 'Agentes de IA', path: '/agentes-ia' },
    { label: 'Ventas', path: '/plataforma-ventas' },
    { label: 'Blog', path: '/blog' },
    { label: 'Nosotros', path: '/nosotros' },
  ];

  protected readonly mobileMenuOpen = signal(false);

  constructor() {
    // `data-stuck` y `data-animatable` se escriben a mano y no por binding a proposito.
    //
    // Con señales, Angular puede volcar ambos atributos en la misma pasada de deteccion
    // de cambios. Si eso pasa, el navegador recibe el cambio de estado con la transicion
    // ya armada y la reproduce entera al cargar la pagina — justo lo que se quiere
    // evitar. Escribiendolos aqui, el orden es explicito y no depende de cuando Angular
    // decida sincronizar.
    //
    // afterNextRender no corre durante el prerenderizado, asi que `window` existe.
    afterNextRender(() => {
      const header = this.host.nativeElement.querySelector('header');
      if (!header) return;

      // Dos umbrales, no uno. Con un solo corte, cualquier ajuste de scroll de unos
      // pocos pixeles cerca de ese valor —el rebote de un movil, o una correccion del
      // propio navegador— invierte el estado, y el estado invertido puede provocar el
      // siguiente ajuste: la barra se queda oscilando. Con la banda muerta entre 8 y
      // 24 hace falta un gesto de verdad para cambiar de estado.
      const PEGAR = 24;
      const SOLTAR = 8;

      const sincronizar = () => {
        const y = window.scrollY;
        if (header.dataset.stuck === 'true') {
          if (y < SOLTAR) header.dataset.stuck = 'false';
        } else if (y > PEGAR) {
          header.dataset.stuck = 'true';
        }
      };

      sincronizar();

      // Leer una medida fuerza al navegador a recalcular estilos AHORA, con la
      // transicion todavia desarmada: el estado inicial queda aplicado de golpe.
      // Solo despues se arma, y armarla no reanima un cambio ya consolidado.
      void header.offsetHeight;
      header.dataset.animatable = 'true';

      // Pasivo para no bloquear el scroll.
      window.addEventListener('scroll', sincronizar, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', sincronizar));
    });
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
