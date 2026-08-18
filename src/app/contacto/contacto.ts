import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Breadcrumbs } from '../common/components/breadcrumbs/breadcrumbs';
import { ContentBlock } from '../common/components/content-block/content-block';
import { PageHero } from '../common/components/page-hero/page-hero';
import { RelatedLink, RelatedLinks } from '../common/components/related-links/related-links';
import { Seo } from '../common/seo/seo';
import { BreadcrumbItem } from '../common/seo/seo.types';
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  ORGANIZATION_ID,
  WHATSAPP_URL,
  absoluteUrl,
} from '../common/seo/site.config';

interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly description: string;
  readonly external: boolean;
}

@Component({
  selector: 'app-contacto',
  imports: [Breadcrumbs, PageHero, ContentBlock, RelatedLinks],
  templateUrl: './contacto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Contacto', path: '/contacto' },
  ];

  protected readonly channels: readonly ContactChannel[] = [
    {
      label: 'WhatsApp',
      value: '+57 300 781 0339',
      href: WHATSAPP_URL,
      description: 'El canal más rápido para agendar una demo o resolver una duda concreta.',
      external: true,
    },
    {
      label: 'Correo',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      description: 'Para propuestas, requerimientos a la medida y temas que necesitan detalle.',
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'Siwina',
      href: LINKEDIN_URL,
      description: 'Sigue lo que publicamos sobre producto, facturación electrónica e IA aplicada.',
      external: true,
    },
  ];

  protected readonly beforeDemo: readonly string[] = [
    'Para que la demo sea útil y no una presentación genérica, nos ayuda saber de antemano cómo vendes hoy: si cobras en mostrador o en mesa, cuántos puntos de venta tienes y qué documentos emites.',
    'Si el tema es atención al cliente, lo que más sirve es tener a mano las preguntas que más te repiten y por qué canal llegan.',
    'Con eso llegamos a la reunión con el caso ya pensado, y tú sales de ella sabiendo si el producto encaja o no.',
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'Punto de venta con facturación electrónica DIAN, inventario y reportes.',
    },
    {
      label: 'Agentes de IA',
      path: '/agentes-ia',
      description: 'Atención 24/7 por WhatsApp, chat web y voz.',
    },
    {
      label: 'Sobre Siwina',
      path: '/nosotros',
      description: 'Quiénes somos y cómo trabajamos.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/contacto',
      title: 'Contacto | Siwina',
      description:
        'Habla con el equipo de Siwina por WhatsApp o correo y agenda una demo de nuestro POS con facturación DIAN, los agentes de IA o la plataforma de ventas.',
      breadcrumbs: this.breadcrumbs,
      schema: [
        {
          '@type': 'ContactPage',
          '@id': `${absoluteUrl('/contacto')}#contactpage`,
          url: absoluteUrl('/contacto'),
          about: { '@id': ORGANIZATION_ID },
        },
      ],
    });
  }
}
