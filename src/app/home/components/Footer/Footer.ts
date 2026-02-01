import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FooterLinks } from './types/footer.types';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './Footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {

  footerLinks = signal<FooterLinks>({
    servicios: [
      { name: "Desarrollo Web", href: "#" },
      { name: "Apps Móviles", href: "#" },
      { name: "Sistemas Empresariales", href: "#" },
      { name: "Consultoría", href: "#" },
    ],
    empresa: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" },
    ],
    legal: [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
    ],
  })

 }
