import { BlogPost } from '../types/post.types';

/**
 * Post registry. Adding an entry here publishes the article, links it from `/blog`
 * and makes the route prerenderable and sitemap-visible — no other file to touch.
 */
export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'que-es-un-sistema-pos',
    title: '¿Qué es un sistema POS y cómo funciona?',
    metaTitle: '¿Qué es un sistema POS y cómo funciona? | Siwina',
    description:
      'Qué es un sistema POS, qué partes lo componen, cómo funciona una venta de principio a fin y qué debe cumplir un punto de venta en Colombia.',
    excerpt:
      'La definición corta es "software de punto de venta", pero eso no explica nada. Aquí está lo que realmente hace un POS y por qué en Colombia tiene una exigencia extra.',
    published: '2026-08-18',
    readingMinutes: 6,
    topic: 'POS',
    sections: [
      {
        heading: 'Qué significa POS',
        paragraphs: [
          'POS son las siglas de point of sale: punto de venta. Es el lugar —físico y digital— donde una transacción se cierra: el cliente paga, el negocio entrega el soporte de esa operación y el inventario se ajusta.',
          'Durante años "el POS" fue la caja registradora. Hoy es software, y eso cambia lo que se le puede pedir: además de cobrar, registra, factura, controla existencias y produce la información con la que se toman decisiones.',
        ],
      },
      {
        heading: 'Las partes de un sistema POS',
        paragraphs: [
          'Un punto de venta moderno se compone de tres piezas que conviene distinguir, porque cuando algo falla casi siempre falla una sola de ellas.',
        ],
        bullets: [
          'El software: la interfaz donde se registra la venta y donde vive el catálogo, los precios y los impuestos.',
          'El hardware: computador o tablet, impresora, lector de código de barras y datáfono. Casi todo esto es opcional según el tipo de negocio.',
          'La emisión del documento: la parte que convierte una venta en un soporte tributario válido.',
        ],
      },
      {
        heading: 'Cómo funciona una venta de principio a fin',
        paragraphs: [
          'El cajero selecciona o escanea los productos y el sistema arma el total con sus impuestos ya calculados. Se registra el medio de pago. Se emite el documento que soporta la operación. El inventario se descuenta. Y la venta queda disponible para los reportes.',
          'Escrito así parece obvio, pero la mayoría de los negocios que trabajan con herramientas sueltas rompen ese flujo en algún punto: venden en un sistema y facturan en otro, o descuentan inventario a mano al final del día. Cada corte es una oportunidad de error.',
        ],
      },
      {
        heading: 'Qué hace distinto a un POS en Colombia',
        paragraphs: [
          'Aquí el soporte de la venta no es libre. La DIAN define qué documento aplica en cada caso: factura electrónica de venta cuando hay un adquiriente identificado, y documento equivalente electrónico para la venta al consumidor final.',
          'Eso significa que un POS genérico, por bueno que sea, queda a medias si no emite esos documentos. Terminas conectando un proveedor de facturación por fuera y digitando la misma venta dos veces.',
          'Un punto de venta pensado para Colombia integra la emisión dentro del mismo flujo de cobro. La venta y su documento son el mismo evento, no dos trámites.',
        ],
      },
      {
        heading: 'Qué mirar antes de elegir uno',
        paragraphs: [
          'Más allá de la lista de funciones, hay cuatro preguntas que separan un POS que sirve de uno que estorba.',
        ],
        bullets: [
          '¿Emite factura electrónica y documento equivalente sin depender de otro sistema?',
          '¿Sigue vendiendo si se cae el internet y sincroniza después?',
          '¿El inventario se mueve solo con cada venta o hay que ajustarlo a mano?',
          '¿Quién responde cuando algo falla, y en cuánto tiempo?',
        ],
      },
    ],
    related: [
      {
        label: 'Software POS de Siwina',
        path: '/pos',
        description: 'Punto de venta con facturación DIAN, inventario, reportes y modo offline.',
      },
      {
        label: 'Facturación electrónica DIAN',
        path: '/facturacion-electronica',
        description: 'Qué documento aplica en cada venta y cómo se valida ante la DIAN.',
      },
      {
        label: 'POS para restaurantes',
        path: '/pos-restaurantes',
        description: 'Cómo cambia el flujo cuando la venta se cobra en la mesa.',
      },
    ],
  },
  {
    slug: 'que-es-la-facturacion-electronica-dian',
    title: 'Qué es la facturación electrónica DIAN y cómo funciona',
    metaTitle: 'Qué es la facturación electrónica DIAN | Siwina',
    description:
      'Guía clara sobre facturación electrónica en Colombia: qué documentos existen, cómo es la validación ante la DIAN y qué necesitas para emitirla.',
    excerpt:
      'Factura electrónica, documento equivalente, notas crédito. Qué es cada uno, cuándo se usa y por qué el problema casi nunca es la norma sino el proceso.',
    published: '2026-08-18',
    readingMinutes: 7,
    topic: 'Facturación electrónica',
    sections: [
      {
        heading: 'La idea de fondo',
        paragraphs: [
          'La facturación electrónica es el modelo con el que la DIAN reemplazó el documento en papel. El soporte de la venta se genera en formato electrónico, se valida ante la entidad y solo después se entrega al cliente.',
          'Para el negocio el cambio no es cosmético. El documento deja de ser algo que se imprime al final y pasa a ser parte del proceso de venta, con reglas sobre qué se emite, cuándo y con qué información.',
        ],
      },
      {
        heading: 'Los documentos que conviven en el sistema',
        paragraphs: [
          'No todo se resuelve con una factura. En la operación diaria de un comercio aparecen varios documentos y cada uno cubre una situación distinta.',
        ],
        bullets: [
          'Factura electrónica de venta: soporta operaciones con un adquiriente identificado, con sus datos en el documento.',
          'Documento equivalente electrónico: cubre la venta al consumidor final, la operación habitual del comercio de mostrador.',
          'Notas crédito y débito: corrigen, anulan o ajustan un documento ya emitido, dejando trazabilidad de lo ocurrido.',
        ],
      },
      {
        heading: 'Cómo es el proceso',
        paragraphs: [
          'El documento se arma con la información de la venta —productos, cantidades, impuestos y datos del cliente cuando aplican—, se envía a la DIAN para validación previa y regresa con el resultado. Recién ahí se entrega al cliente, junto con su representación gráfica.',
          'Todo lo emitido queda registrado, así que los consolidados de ventas e impuestos se construyen con datos que ya existen, en lugar de reconstruirse al cierre de mes.',
        ],
      },
      {
        heading: 'Dónde se rompe en la práctica',
        paragraphs: [
          'La mayoría de los problemas que vemos no vienen de la norma, vienen del proceso. Cuando el sistema donde ocurre la venta y el sistema donde se factura son distintos, alguien tiene que digitar la operación dos veces.',
          'Esa doble digitación produce tres cosas, todas caras: diferencias entre lo vendido y lo facturado, errores en el reporte de impuestos, y horas del equipo dedicadas a cuadrar en lugar de a vender.',
          'La solución no es un mejor proveedor de facturación. Es que la emisión ocurra dentro del mismo flujo en el que se cobra.',
        ],
      },
      {
        heading: 'Qué necesita tu negocio para empezar',
        paragraphs: [
          'Antes de mirar herramientas, conviene tener claro el contexto propio: qué tipo de operaciones haces, si tus clientes piden factura a su nombre o compran como consumidor final, cuántos puntos de venta tienes y qué impuestos aplican a tu catálogo.',
          'Con eso definido, la configuración inicial —tipos de documento, impuestos por producto, sedes y la resolución con la que vas a operar— es parte de una implementación normal. En Siwina esa implementación toma menos de dos semanas e incluye la capacitación del equipo.',
        ],
      },
    ],
    related: [
      {
        label: 'Facturación electrónica DIAN',
        path: '/facturacion-electronica',
        description: 'Cómo emitir factura y documento equivalente desde tu punto de venta.',
      },
      {
        label: 'Software POS de Siwina',
        path: '/pos',
        description: 'El punto de venta donde la venta y el documento son el mismo evento.',
      },
      {
        label: 'POS para tiendas',
        path: '/pos-tiendas',
        description: 'Documento equivalente y alto volumen de tiquetes en comercio de mostrador.',
      },
    ],
  },
];

export function findPost(slug: string | null): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
