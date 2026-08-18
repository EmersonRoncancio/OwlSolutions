import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  protected readonly links: readonly NavLink[] = [
    { label: 'POS', path: '/pos' },
    { label: 'Agentes de IA', path: '/agentes-ia' },
    { label: 'Ventas', path: '/plataforma-ventas' },
    { label: 'Blog', path: '/blog' },
    { label: 'Nosotros', path: '/nosotros' },
  ];

  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
