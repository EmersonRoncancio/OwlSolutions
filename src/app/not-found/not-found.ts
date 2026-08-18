import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RelatedLink, RelatedLinks } from '../common/components/related-links/related-links';
import { Seo } from '../common/seo/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, RelatedLinks],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  private readonly seo = inject(Seo);

  protected readonly links: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'Punto de venta con facturación electrónica DIAN, inventario y reportes.',
    },
    {
      label: 'Agentes de IA',
      path: '/agentes-ia',
      description: 'Atención por WhatsApp, chat web y voz 24/7.',
    },
    {
      label: 'Plataforma de ventas',
      path: '/plataforma-ventas',
      description: 'Bandeja única de canales y calificación de leads con IA.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/404',
      title: 'Página no encontrada | Siwina',
      description: 'La página que buscas no existe o cambió de dirección.',
      index: false,
    });
  }
}
