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
  selector: 'app-pos',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './pos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pos {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'POS', path: '/pos' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Factura electrónica y documento equivalente',
    'Inventario y multi-sucursal',
    'Funciona offline',
  ];

  protected readonly intro: readonly string[] = [
    'Un sistema POS (point of sale, o punto de venta) es el software con el que un negocio registra una venta, cobra, entrega el soporte tributario al cliente y actualiza su inventario. En Colombia ese soporte tiene reglas propias: la DIAN exige factura electrónica de venta o documento equivalente electrónico según el tipo de operación.',
    'El POS de Siwina está construido para ese contexto. No es un punto de venta genérico al que después hay que conectarle un proveedor de facturación por fuera: la emisión del documento ocurre dentro del mismo flujo de cobro, con los impuestos ya configurados para tu negocio.',
    'Es software propio, diseñado y mantenido por nuestro equipo, lo que significa que cuando algo cambia en la norma o necesitas un ajuste, hablas directo con quien construye el producto.',
  ];

  protected readonly invoicing: readonly string[] = [
    'La factura electrónica de venta es el documento que soporta las operaciones con clientes identificados y se valida ante la DIAN antes de entregarse. El documento equivalente electrónico cubre las ventas al consumidor final, típicas del comercio de mostrador, donde el cliente no requiere factura a su nombre.',
    'Muchos negocios terminan con dos sistemas: uno para vender y otro para facturar. Eso obliga a digitar la misma venta dos veces, abre la puerta a errores en el reporte de impuestos y hace lento el cierre de mes.',
    'En Siwina la venta y el documento son el mismo evento. El cajero cobra y el documento sale validado; el reporte de impuestos se arma solo con la información que ya registró la caja.',
  ];

  protected readonly invoicingBullets: readonly string[] = [
    'Emisión de factura electrónica de venta validada ante la DIAN',
    'Documento equivalente electrónico para venta a consumidor final',
    'Impuestos configurados por producto y por tipo de operación',
    'Consolidado de impuestos listo para tu contador',
  ];

  protected readonly inventory: readonly string[] = [
    'El inventario se mueve con cada venta, así que la existencia que ves en pantalla es la existencia real. Eso evita vender lo que ya no tienes y te deja anticipar las compras en lugar de reaccionar cuando el producto se acabó.',
    'Los reportes están pensados para tomar decisiones, no para llenar pantallas: qué se vende, en qué horario, en qué sede y con qué margen. Si operas varios puntos de venta, la comparación entre sedes está en la misma vista.',
    'Y si el internet falla, el POS no se detiene: sigue registrando ventas en modo offline y sincroniza cuando la conexión vuelve.',
  ];

  protected readonly modules: readonly Feature[] = [
    {
      title: 'Facturación electrónica DIAN',
      description:
        'Emite factura electrónica de venta validada ante la DIAN desde la misma pantalla de cobro, sin salir del punto de venta ni pasar por otra plataforma.',
    },
    {
      title: 'Documento equivalente electrónico',
      description:
        'Cubre las ventas al consumidor final con el documento equivalente electrónico, para negocios que facturan mucho volumen y tiquetes pequeños.',
    },
    {
      title: 'Inventario en tiempo real',
      description:
        'Cada venta descuenta existencias al instante. Consulta qué se está agotando antes de que te quedes sin producto en la estantería.',
    },
    {
      title: 'Reportes de ventas e impuestos',
      description:
        'Cierres de caja, ventas por producto, por vendedor y por franja horaria, además del consolidado de impuestos que necesita tu contador.',
    },
    {
      title: 'Multi-sucursal',
      description:
        'Administra varios puntos de venta bajo una sola cuenta y compara el desempeño de cada sede sin exportar archivos a mano.',
    },
    {
      title: 'Modo offline con sincronización',
      description:
        'Si se cae el internet el POS sigue vendiendo. Cuando vuelve la conexión, las transacciones se sincronizan solas.',
    },
  ];

  protected readonly useCases: readonly Feature[] = [
    {
      title: 'Restaurantes',
      description:
        'Toma de pedidos por mesa, envío a cocina y cierre de cuenta con factura electrónica o documento equivalente según el caso.',
    },
    {
      title: 'Cafeterías y comidas rápidas',
      description:
        'Cobro rápido en mostrador, tiquetes cortos y control de insumos para operaciones de alta rotación.',
    },
    {
      title: 'Tiendas y minimercados',
      description:
        'Venta por código de barras, control de existencias por referencia y arqueo de caja al final del turno.',
    },
    {
      title: 'Negocios con varios puntos',
      description:
        'Un catálogo central, precios consistentes en todas las sedes y reportes comparativos entre sucursales.',
    },
  ];

  protected readonly implementation: readonly Feature[] = [
    {
      title: 'Diagnóstico de tu operación',
      description:
        'Revisamos cómo vendes hoy, qué documentos emites y qué información necesitas de tus reportes.',
    },
    {
      title: 'Configuración y carga de datos',
      description:
        'Dejamos listo el catálogo, los impuestos, las sedes y la resolución de facturación con la que vas a operar.',
    },
    {
      title: 'Capacitación del equipo',
      description:
        'Entrenamos a cajeros y administradores en el flujo real de tu negocio, no en una demo genérica.',
    },
    {
      title: 'Salida a producción y soporte',
      description:
        'Acompañamos los primeros días de operación y seguimos disponibles en español, hablando directo con quien construye el producto.',
    },
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿El POS de Siwina factura electrónicamente ante la DIAN?',
      answer:
        'Sí. El punto de venta emite factura electrónica de venta validada ante la DIAN y también documento equivalente electrónico, desde la misma pantalla en la que cobras.',
    },
    {
      question: '¿Qué pasa si se cae el internet en mitad de una venta?',
      answer:
        'El POS sigue operando en modo offline y guarda las transacciones localmente. Cuando la conexión regresa, la información se sincroniza automáticamente sin que tengas que reingresar nada.',
    },
    {
      question: '¿Sirve para un negocio con varias sucursales?',
      answer:
        'Sí. Puedes administrar varios puntos de venta bajo una sola cuenta, con catálogo compartido y reportes que te permiten comparar el desempeño de cada sede.',
    },
    {
      question: '¿Cuánto tarda la implementación?',
      answer:
        'La implementación estándar toma menos de dos semanas e incluye configuración, carga de catálogo, capacitación del equipo y acompañamiento en la salida a producción.',
    },
    {
      question: '¿Necesito comprar equipos especiales?',
      answer:
        'El POS funciona sobre web, así que puedes operarlo desde el computador o la tablet que ya tienes. En la demo revisamos tu hardware actual y qué periféricos te conviene conectar.',
    },
    {
      question: '¿Puedo usar solo el POS sin los demás productos de Siwina?',
      answer:
        'Sí. Cada producto de Siwina se adopta por separado. Puedes empezar únicamente con el POS y sumar los agentes de IA o la plataforma de ventas más adelante.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Facturación electrónica DIAN',
      path: '/facturacion-electronica',
      description: 'Cómo funciona la facturación electrónica en Colombia y qué necesitas para emitirla.',
    },
    {
      label: 'POS para restaurantes',
      path: '/pos-restaurantes',
      description: 'Mesas, comandas a cocina, propinas y cierre de turno para servicio a la mesa.',
    },
    {
      label: 'POS para tiendas',
      path: '/pos-tiendas',
      description: 'Código de barras, rotación de inventario y arqueo de caja para retail de barrio.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/pos',
      title: 'Software POS con facturación DIAN en Colombia | Siwina',
      description:
        'Software POS para Colombia con facturación electrónica DIAN, documento equivalente, inventario, reportes y multi-sucursal. Agenda una demo.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'SoftwareApplication',
          '@id': `${absoluteUrl('/pos')}#software`,
          name: 'Zemli',
          alternateName: 'POS Siwina con facturación electrónica DIAN',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: absoluteUrl('/pos'),
          description:
            'Punto de venta para negocios en Colombia con factura electrónica y documento equivalente validados ante la DIAN, inventario, reportes, multi-sucursal y modo offline.',
          featureList: this.modules.map((module) => module.title),
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
