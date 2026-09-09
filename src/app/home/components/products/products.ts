import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductSection } from './productSection/productSection';
import { Product } from './types/product.types';

import { Reveal } from '../../../common/directives/reveal';

@Component({
  selector: 'app-products',
  imports: [ProductSection, Reveal],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  protected readonly products: readonly Product[] = [
    {
      id: 'pos-dian',
      eyebrow: 'Punto de venta',
      name: 'Zemli',
      tagline: 'POS con facturación electrónica DIAN',
      description:
        'Un punto de venta pensado para el comercio colombiano: factura electrónica validada ante la DIAN en segundos, control de inventario y reportes de ventas en un solo lugar.',
      badges: ['Cumple con la DIAN', 'Multi-sucursal', 'Funciona offline'],
      features: [
        'Facturación electrónica y documento equivalente ante la DIAN',
        'Control de inventario y multi-sucursal',
        'Reportes de ventas e impuestos en tiempo real',
        'Funciona offline y sincroniza al reconectar',
      ],
      useCase:
        'ideal para tiendas, restaurantes y negocios con múltiples puntos de venta que necesitan cumplir con la DIAN sin complicarse.',
      cta: 'Conocer Zemli',
      ctaHref: '/pos',
      artifact: 'pos',
      photo: {
        png: '/images/barista-pos.png',
        // Candidatos exportados a mano. Los anchos NO son redondos por capricho: caen
        // justo en lo que pide la maqueta, para que el navegador no reescale encima.
        // La ranura mide 520px de CSS, asi que 520 sirve 1x y 1040 sirve 2x sin tocar
        // un pixel; 760 cubre el movil a 2x y 1448 las pantallas a 3x. El numero de
        // `width` tiene que ser el ancho REAL del archivo: nadie lo verifica, y si
        // miente el navegador elige mal sin avisar de nada.
        sources: [
          { src: '/images/barista-pos-520.webp', width: 520 },
          { src: '/images/barista-pos-760.webp', width: 760 },
          { src: '/images/barista-pos-1040.webp', width: 1040 },
          { src: '/images/barista-pos-1448.webp', width: 1448 },
        ],
        alt: 'Cajera escaneando un producto con lector de código de barras junto a la terminal POS de Siwina, con datáfono e impresora de tirilla',
        width: 1448,
        height: 1448,
      },
    },
    {
      id: 'agentes-ia',
      eyebrow: 'Atención al cliente',
      name: 'Soy Alondra',
      tagline: 'Agentes de IA para soporte y atención',
      description:
        'Agentes de inteligencia artificial que responden, agendan y resuelven por WhatsApp, chat web y llamadas — disponibles 24/7 y con escalamiento a un humano cuando lo necesitan.',
      badges: ['WhatsApp, web y voz', 'Atención 24/7', 'Escala a una persona'],
      features: [
        'Atención 24/7 por WhatsApp, web y voz',
        'Entrenado con la información de tu negocio',
        'Escalamiento automático a un agente humano',
        'Métricas de conversación y satisfacción',
      ],
      useCase:
        'pensado para negocios que reciben muchas consultas repetitivas y quieren responder rápido sin crecer el equipo de soporte.',
      cta: 'Conocer Soy Alondra',
      ctaHref: '/agentes-ia',
      artifact: 'agent',
      photo: {
        png: '/images/support-headphones.png',
        // Mismas cuatro tallas que las demas: todas parten de un original de 1448px.
        sources: [
          { src: '/images/support-headphones-520.webp', width: 520 },
          { src: '/images/support-headphones-760.webp', width: 760 },
          { src: '/images/support-headphones-1040.webp', width: 1040 },
          { src: '/images/support-headphones-1448.webp', width: 1448 },
        ],
        alt: 'Agente de soporte con diadema atendiendo clientes desde su portátil con ayuda de IA',
        width: 1448,
        height: 1448,
      },
    },
    {
      id: 'plataforma-ventas',
      eyebrow: 'Ventas',
      name: 'Mesa Origen',
      tagline: 'Plataforma de ventas con agente de IA',
      description:
        'Centraliza todos tus canales de venta en un solo lugar y deja que un agente de IA califique leads, haga seguimiento y agende reuniones por ti.',
      badges: ['Bandeja única', 'Califica leads solo', 'Reportes por canal'],
      features: [
        'Bandeja única para WhatsApp, redes e email',
        'Agente de IA que califica y da seguimiento a leads',
        'Pipeline de ventas y recordatorios automáticos',
        'Reportes de conversión por canal',
      ],
      useCase:
        'para equipos comerciales que pierden leads entre canales y quieren un agente que nunca deje una conversación sin respuesta.',
      cta: 'Conocer Mesa Origen',
      ctaHref: '/plataforma-ventas',
      artifact: 'pipeline',
      photo: {
        png: '/images/team-group.png',
        // Mismas cuatro tallas que las demas: todas parten de un original de 1448px.
        sources: [
          { src: '/images/team-group-520.webp', width: 520 },
          { src: '/images/team-group-760.webp', width: 760 },
          { src: '/images/team-group-1040.webp', width: 1040 },
          { src: '/images/team-group-1448.webp', width: 1448 },
        ],
        alt: 'Equipo comercial revisando en laptop y celular el pipeline de ventas de Siwina',
        width: 1448,
        height: 1448,
      },
    },
  ];

  /** Se deriva del catalogo para que la volanta nunca contradiga a la lista. */
  protected readonly productCount = String(this.products.length).padStart(2, '0');
}
