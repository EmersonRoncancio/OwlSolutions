import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterColumn } from './types/footer.types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: readonly FooterColumn[] = [
    {
      title: 'Productos',
      links: [
        { label: 'POS con facturación DIAN', href: '#productos' },
        { label: 'Agentes de IA & Soporte', href: '#productos' },
        { label: 'Plataforma de Ventas', href: '#productos' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Contacto', href: '#contacto' },
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
