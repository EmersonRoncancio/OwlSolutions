import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Breadcrumbs } from '../common/components/breadcrumbs/breadcrumbs';
import { ContentBlock } from '../common/components/content-block/content-block';
import { CtaBand } from '../common/components/cta-band/cta-band';
import { Feature, FeatureGrid } from '../common/components/feature-grid/feature-grid';
import { PageHero } from '../common/components/page-hero/page-hero';
import { RelatedLink, RelatedLinks } from '../common/components/related-links/related-links';
import { Trust } from '../common/components/trust/trust';
import { Seo } from '../common/seo/seo';
import { BreadcrumbItem } from '../common/seo/seo.types';

@Component({
  selector: 'app-nosotros',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Trust, RelatedLinks, CtaBand],
  templateUrl: './nosotros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotros {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Software hecho en Colombia',
    'Producto propio',
    'Soporte en español',
  ];

  protected readonly story: readonly string[] = [
    'Siwina es una empresa colombiana de software. Construimos producto propio para resolver tres problemas concretos del día a día de un negocio: cobrar y facturar, atender a los clientes y hacer seguimiento a las ventas.',
    'La diferencia entre una empresa de proyectos y una de producto está en qué pasa después de la entrega. Un proyecto termina; un producto se mantiene, se ajusta cuando cambia la norma y mejora con lo que aprendemos de cada implementación. Ese es el modelo que elegimos.',
    'Trabajamos para el mercado colombiano, que tiene reglas propias: la facturación electrónica ante la DIAN no es un detalle de configuración, es el centro de cómo opera un comercio aquí. Construir para ese contexto exige conocerlo, no adaptarlo después.',
  ];

  protected readonly principles: readonly Feature[] = [
    {
      title: 'Cumplimiento DIAN al día',
      description:
        'La facturación electrónica es parte del producto, no un módulo que se conecta por fuera y se actualiza tarde.',
    },
    {
      title: 'Producto propio, no plantillas',
      description:
        'Diseñado y mantenido por nuestro propio equipo, así que los ajustes no dependen de un tercero.',
    },
    {
      title: 'Soporte en español, sin intermediarios',
      description:
        'Hablas directo con quien construye el producto, no con una capa de atención que traduce tu problema.',
    },
    {
      title: 'A la medida cuando hace falta',
      description:
        'Si tu caso no encaja en un producto existente, lo construimos en lugar de forzar la operación.',
    },
    {
      title: 'Implementación corta',
      description:
        'La implementación estándar toma menos de dos semanas, con capacitación del equipo incluida.',
    },
    {
      title: 'Adopción por partes',
      description:
        'Cada producto funciona por separado. Puedes empezar por uno y sumar los demás cuando la operación lo pida.',
    },
  ];

  protected readonly products: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'Punto de venta con facturación electrónica DIAN, inventario y multi-sucursal.',
    },
    {
      label: 'Agentes de IA',
      path: '/agentes-ia',
      description: 'Atención por WhatsApp, chat web y voz 24/7 con escalamiento a un humano.',
    },
    {
      label: 'Plataforma de ventas',
      path: '/plataforma-ventas',
      description: 'Bandeja única de canales, calificación de leads con IA y pipeline de ventas.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/nosotros',
      title: 'Sobre Siwina | Empresa colombiana de software con IA',
      description:
        'Siwina es una empresa colombiana de software que construye producto propio: POS con facturación DIAN, agentes de IA para atención y una plataforma de ventas.',
      breadcrumbs: this.breadcrumbs,
    });
  }
}
