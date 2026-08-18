import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterColumn } from './types/footer.types';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: readonly FooterColumn[] = [
    {
      title: 'Productos',
      links: [
        { label: 'POS con facturación DIAN', href: '/pos' },
        { label: 'POS para restaurantes', href: '/pos-restaurantes' },
        { label: 'POS para tiendas', href: '/pos-tiendas' },
        { label: 'Facturación electrónica', href: '/facturacion-electronica' },
        { label: 'Agentes de IA', href: '/agentes-ia' },
        { label: 'Plataforma de ventas', href: '/plataforma-ventas' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contacto', href: '/contacto' },
        { label: 'WhatsApp', href: 'https://wa.me/573007810339', external: true },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/siwina/about/',
          external: true,
        },
      ],
    },
  ];
}
