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
  selector: 'app-facturacion-electronica',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './facturacion-electronica.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacturacionElectronica {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Facturación electrónica', path: '/facturacion-electronica' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Validación previa ante la DIAN',
    'Documento equivalente electrónico',
    'Notas crédito y débito',
  ];

  protected readonly intro: readonly string[] = [
    'La facturación electrónica es el modelo con el que la DIAN reemplazó el papel: el documento se genera en formato electrónico, se valida ante la entidad y solo entonces se entrega al cliente. Para el negocio significa que la venta y su soporte tributario dejan de ser dos trámites separados.',
    'En Colombia conviven varios documentos dentro del mismo sistema. La factura electrónica de venta soporta las operaciones con un adquiriente identificado; el documento equivalente electrónico cubre la venta al consumidor final; y las notas crédito y débito corrigen o ajustan lo ya emitido.',
    'Lo que suele fallar no es la norma, sino el proceso. Cuando facturar implica salir del sistema donde ocurrió la venta y volver a digitarla, aparecen los errores, las diferencias en el reporte de impuestos y las horas perdidas en el cierre de mes.',
  ];

  protected readonly documents: readonly Feature[] = [
    {
      title: 'Factura electrónica de venta',
      description:
        'Documento con validación previa ante la DIAN para operaciones con un adquiriente identificado. Incluye su representación gráfica para entregar al cliente.',
    },
    {
      title: 'Documento equivalente electrónico',
      description:
        'Soporta la venta al consumidor final, típica del comercio de mostrador, donde no se emite factura a nombre de un tercero identificado.',
    },
    {
      title: 'Notas crédito y débito',
      description:
        'Corrigen, anulan o ajustan un documento ya emitido, sin tener que rehacer la contabilidad del período a mano.',
    },
  ];

  protected readonly flow: readonly Feature[] = [
    {
      title: 'Se registra la venta',
      description:
        'El documento se arma con la información que ya capturó el sistema: productos, cantidades, impuestos y datos del cliente cuando aplican.',
    },
    {
      title: 'Se valida ante la DIAN',
      description:
        'El documento electrónico se envía para validación previa y regresa con el resultado de la entidad.',
    },
    {
      title: 'Se entrega al cliente',
      description:
        'El cliente recibe su documento y su representación gráfica por el canal que use tu negocio.',
    },
    {
      title: 'Queda disponible para reportes',
      description:
        'Todo lo emitido alimenta los consolidados de ventas e impuestos que necesita tu contador, sin reconstruir la información después.',
    },
  ];

  protected readonly benefits: readonly string[] = [
    'Una sola captura de datos: la venta y el documento son el mismo evento',
    'Menos errores de digitación en los reportes de impuestos',
    'Historial consultable de todo lo emitido, anulado y corregido',
    'Cierres de mes que no dependen de consolidar archivos a mano',
  ];

  protected readonly howSiwina: readonly string[] = [
    'En Siwina la facturación electrónica no es un módulo aparte que se conecta después: viene integrada al punto de venta, así que se emite en el mismo momento en el que se cobra.',
    'La configuración inicial —impuestos por producto, tipos de documento, sedes y resolución con la que vas a operar— hace parte de la implementación, que toma menos de dos semanas.',
    'Y el soporte es en español y directo con el equipo que construye el producto, sin intermediarios que traduzcan tu problema a otro proveedor.',
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿Cuál es la diferencia entre factura electrónica y documento equivalente?',
      answer:
        'La factura electrónica de venta soporta operaciones con un adquiriente identificado, con sus datos en el documento. El documento equivalente electrónico cubre la venta al consumidor final, que es la operación habitual del comercio de mostrador.',
    },
    {
      question: '¿Necesito un software aparte para facturar electrónicamente?',
      answer:
        'No necesariamente. En Siwina la facturación electrónica está integrada al punto de venta, así que el documento se emite dentro del mismo flujo de cobro y no hay que digitar la venta dos veces.',
    },
    {
      question: '¿Qué pasa si me equivoco en una factura ya emitida?',
      answer:
        'Los ajustes se hacen con notas crédito o débito, que corrigen o anulan el documento original dejando trazabilidad de lo ocurrido en lugar de modificar lo ya validado.',
    },
    {
      question: '¿La facturación electrónica funciona sin internet?',
      answer:
        'La validación ante la DIAN requiere conexión. El POS de Siwina sigue registrando ventas en modo offline y sincroniza las transacciones cuando la conexión vuelve.',
    },
    {
      question: '¿Cuánto tarda dejar la facturación electrónica funcionando?',
      answer:
        'La implementación estándar de Siwina toma menos de dos semanas e incluye la configuración de impuestos, tipos de documento y sedes, además de la capacitación del equipo.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Software POS',
      path: '/pos',
      description: 'El punto de venta donde se emite la factura en el mismo momento del cobro.',
    },
    {
      label: 'POS para restaurantes',
      path: '/pos-restaurantes',
      description: 'Cómo se factura cuando el cobro ocurre en la mesa y no en el mostrador.',
    },
    {
      label: 'POS para tiendas',
      path: '/pos-tiendas',
      description: 'Documento equivalente y alto volumen de tiquetes en comercio de barrio.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/facturacion-electronica',
      title: 'Software de facturación electrónica DIAN | Siwina',
      description:
        'Qué es la facturación electrónica DIAN, cómo funciona el documento equivalente y cómo emitirla desde tu punto de venta sin digitar la misma venta dos veces.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'Service',
          '@id': `${absoluteUrl('/facturacion-electronica')}#service`,
          name: 'Facturación electrónica DIAN',
          serviceType: 'Software de facturación electrónica',
          url: absoluteUrl('/facturacion-electronica'),
          description:
            'Emisión de factura electrónica de venta, documento equivalente electrónico y notas crédito y débito con validación ante la DIAN, integrada al punto de venta.',
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
