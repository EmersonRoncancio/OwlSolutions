import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Trust } from '../common/components/trust/trust';
import { Seo } from '../common/seo/seo';
import { ORGANIZATION_ID, absoluteUrl } from '../common/seo/site.config';
import { About } from './components/about/about';
import { Cta } from './components/cta/cta';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';

@Component({
  selector: 'app-home',
  imports: [Hero, Products, About, Trust, Cta],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.apply({
      path: '/',
      title: 'Siwina | Software POS, facturación DIAN y agentes de IA',
      description:
        'Empresa colombiana de software: POS con facturación electrónica DIAN, agentes de IA para atención y plataforma de ventas. Implementación en 2 semanas.',
      schema: [
        {
          '@type': 'ItemList',
          '@id': `${absoluteUrl('/')}#productos`,
          name: 'Productos Siwina',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'SoftwareApplication',
                '@id': `${absoluteUrl('/pos')}#software`,
                name: 'Zemli',
                alternateName: 'POS con facturación electrónica DIAN',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: absoluteUrl('/pos'),
                description:
                  'Punto de venta con factura electrónica validada ante la DIAN, control de inventario y reportes en tiempo real.',
                provider: { '@id': ORGANIZATION_ID },
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Service',
                '@id': `${absoluteUrl('/agentes-ia')}#service`,
                name: 'Soy Alondra',
                alternateName: 'Agentes de IA para soporte y atención',
                serviceType: 'Atención al cliente con inteligencia artificial',
                url: absoluteUrl('/agentes-ia'),
                description:
                  'Agentes de IA que responden, agendan y resuelven por WhatsApp, chat web y llamadas 24/7.',
                provider: { '@id': ORGANIZATION_ID },
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Service',
                '@id': `${absoluteUrl('/plataforma-ventas')}#service`,
                name: 'Mesa Origen',
                alternateName: 'Plataforma de ventas con agente de IA',
                serviceType: 'Automatización de ventas',
                url: absoluteUrl('/plataforma-ventas'),
                description:
                  'Centraliza los canales de venta y califica leads con un agente de IA.',
                provider: { '@id': ORGANIZATION_ID },
              },
            },
          ],
        },
      ],
    });
  }
}
