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
  selector: 'app-pos-restaurantes',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './pos-restaurantes.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosRestaurantes {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'POS', path: '/pos' },
    { label: 'POS para restaurantes', path: '/pos-restaurantes' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Cuenta por mesa',
    'Comandas a cocina',
    'Cierre de turno',
  ];

  protected readonly intro: readonly string[] = [
    'Un restaurante no vende como una tienda. La venta no se cierra en un mostrador: se abre cuando el cliente se sienta, crece mientras pide, se divide entre varias personas y se cobra al final. Un POS pensado para retail obliga a forzar ese flujo, y ahí es donde aparecen los errores de cuenta.',
    'El POS de Siwina se configura para servicio a la mesa: la cuenta vive abierta, los productos se agregan en el momento del pedido y la comanda llega a cocina sin que nadie tenga que caminar con un papel.',
    'Y cuando llega el momento de cobrar, el documento —factura electrónica o documento equivalente— sale desde el mismo sistema, validado ante la DIAN.',
  ];

  protected readonly features: readonly Feature[] = [
    {
      title: 'Cuenta abierta por mesa',
      description:
        'Cada mesa tiene su cuenta viva: se agregan platos, se corrigen pedidos y se cobra cuando el cliente lo pide, no antes.',
    },
    {
      title: 'Comandas directo a cocina',
      description:
        'El pedido llega a producción en el momento en que se toma, sin depender de que alguien lleve la nota hasta la cocina.',
    },
    {
      title: 'Facturación DIAN en la mesa',
      description:
        'Factura electrónica o documento equivalente emitidos desde el mismo flujo de cobro, sin pasar a otro sistema.',
    },
    {
      title: 'Control de insumos',
      description:
        'Cada plato descuenta lo que consume, así el inventario refleja lo que de verdad queda en la cocina.',
    },
    {
      title: 'Cierre de turno y arqueo',
      description:
        'Cuadre de caja por turno y por mesero, para cerrar el día sin reconstruir la jornada de memoria.',
    },
    {
      title: 'Varias sedes bajo una cuenta',
      description:
        'Carta y precios consistentes entre locales, con reportes que permiten comparar el desempeño de cada uno.',
    },
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿El POS maneja cuentas por mesa?',
      answer:
        'Sí. La cuenta se abre cuando el cliente se sienta y permanece abierta mientras se agregan productos, hasta el momento del cobro.',
    },
    {
      question: '¿Las comandas llegan a cocina automáticamente?',
      answer:
        'Sí. El pedido se envía a producción en el mismo momento en que se toma, sin depender de que alguien lleve la nota físicamente.',
    },
    {
      question: '¿Puedo emitir factura electrónica desde la mesa?',
      answer:
        'Sí. La factura electrónica de venta y el documento equivalente se emiten desde el mismo flujo de cobro, con validación ante la DIAN.',
    },
    {
      question: '¿Funciona si se cae el internet en pleno servicio?',
      answer:
        'El POS sigue operando en modo offline y sincroniza las transacciones cuando la conexión vuelve, para que el servicio no se detenga.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'La vista general del punto de venta: módulos, implementación y soporte.',
    },
    {
      label: 'POS para tiendas',
      path: '/pos-tiendas',
      description: 'La variante para comercio de mostrador y alta rotación de referencias.',
    },
    {
      label: 'Facturación electrónica',
      path: '/facturacion-electronica',
      description: 'Cómo funcionan la factura electrónica y el documento equivalente.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/pos-restaurantes',
      title: 'Software POS para restaurantes con facturación DIAN | Siwina',
      description:
        'POS para restaurantes con cuenta por mesa, comandas a cocina, control de insumos, cierre de turno y facturación electrónica DIAN. Agenda una demo con Siwina.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl('/pos-restaurantes')}#software`,
          name: 'POS Siwina para restaurantes',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: absoluteUrl('/pos-restaurantes'),
          description:
            'Punto de venta para restaurantes con cuenta abierta por mesa, comandas a cocina, control de insumos, cierre de turno y facturación electrónica DIAN.',
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
