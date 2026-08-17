import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly links: readonly NavLink[] = [
    { label: 'Productos', fragment: '#productos' },
    { label: 'Nosotros', fragment: '#nosotros' },
    { label: 'Contacto', fragment: '#contacto' },
  ];

  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
