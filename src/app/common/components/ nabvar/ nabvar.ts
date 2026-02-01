import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'nabvar',
  imports: [],
  templateUrl: './ nabvar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nabvar {
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
