import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Breadcrumbs } from '../common/components/breadcrumbs/breadcrumbs';
import { ContentBlock } from '../common/components/content-block/content-block';
import { CtaBand } from '../common/components/cta-band/cta-band';
import { Faq } from '../common/components/faq/faq';
import { Feature, FeatureGrid } from '../common/components/feature-grid/feature-grid';
import { PageHero } from '../common/components/page-hero/page-hero';
import { RelatedLink, RelatedLinks } from '../common/components/related-links/related-links';
import { Seo } from '../common/seo/seo';
import { BreadcrumbItem, FaqItem } from '../common/seo/seo.types';
import { ORGANIZATION_ID, absoluteUrl } from '../common/seo/site.config';

@Component({
  selector: 'app-pos-tiendas',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './pos-tiendas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosTiendas {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'POS', path: '/pos' },
    { label: 'POS para tiendas', path: '/pos-tiendas' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Venta por código de barras',
    'Documento equivalente',
    'Arqueo de caja',
  ];

  protected readonly intro: readonly string[] = [
    'En una tienda o minimercado la venta se gana en segundos. Muchas referencias, tiquetes pequeños, fila en la caja y un cliente que casi nunca pide factura a su nombre. Lo que hace lento a un POS mal configurado no es la falta de funciones: es la cantidad de clics entre el producto y el cobro.',
    'El POS de Siwina se configura para ese ritmo: venta por código de barras, existencias que se descuentan solas y documento equivalente electrónico para la venta al consumidor final, sin frenar la caja.',
    'Y como el inventario se mueve en tiempo real, dejas de descubrir los faltantes cuando ya perdiste la venta.',
  ];

  protected readonly features: readonly Feature[] = [
    {
      title: 'Venta por código de barras',
      description:
        'Escanear y cobrar. Menos clics por venta significa menos fila en la caja y menos errores de digitación.',
    },
    {
      title: 'Documento equivalente electrónico',
      description:
        'Cubre la venta al consumidor final, que es la operación habitual del comercio de mostrador, y también emite factura cuando el cliente la pide.',
    },
    {
      title: 'Inventario por referencia',
      description:
        'Cada venta descuenta existencias al instante, así sabes qué se está agotando antes de quedarte sin producto.',
    },
    {
      title: 'Reportes de rotación',
      description:
        'Qué referencias se mueven y cuáles llevan semanas en la estantería, para comprar con criterio y no por costumbre.',
    },
    {
      title: 'Arqueo de caja por turno',
      description:
        'Cierre de caja al final de cada turno, con el detalle de lo vendido y lo recibido en cada medio de pago.',
    },
    {
      title: 'Varias tiendas, un catálogo',
      description:
        'Precios consistentes entre puntos y reportes comparativos, sin exportar archivos a mano para cruzar la información.',
    },
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿Puedo vender con lector de código de barras?',
      answer:
        'Sí. La venta por código de barras es el flujo principal para tiendas y minimercados, pensado para cobrar rápido con muchas referencias.',
    },
    {
      question: '¿Tengo que emitir factura electrónica a cada cliente?',
      answer:
        'La venta al consumidor final se soporta con documento equivalente electrónico. Cuando un cliente sí requiere factura a su nombre, se emite factura electrónica de venta desde el mismo POS.',
    },
    {
      question: '¿Puedo controlar el inventario de varias tiendas?',
      answer:
        'Sí. Puedes administrar varios puntos bajo una sola cuenta, con catálogo compartido y reportes que permiten comparar el desempeño de cada tienda.',
    },
    {
      question: '¿Y si se cae el internet?',
      answer:
        'El POS sigue vendiendo en modo offline y sincroniza las transacciones cuando la conexión regresa, para que la caja no se detenga.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'La vista general del punto de venta: módulos, implementación y soporte.',
    },
    {
      label: 'POS para restaurantes',
      path: '/pos-restaurantes',
      description: 'La variante para servicio a la mesa, comandas y cierre de turno.',
    },
    {
      label: 'Facturación electrónica',
      path: '/facturacion-electronica',
      description: 'Qué documento aplica en cada tipo de venta y cómo se valida ante la DIAN.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/pos-tiendas',
      title: 'Software POS para tiendas y minimercados | Siwina',
      description:
        'POS para tiendas con venta por código de barras, documento equivalente electrónico, inventario en tiempo real, rotación y arqueo de caja por turno.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl('/pos-tiendas')}#software`,
          name: 'POS Siwina para tiendas',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: absoluteUrl('/pos-tiendas'),
          description:
            'Punto de venta para tiendas y minimercados con venta por código de barras, documento equivalente electrónico, inventario en tiempo real y arqueo de caja.',
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
