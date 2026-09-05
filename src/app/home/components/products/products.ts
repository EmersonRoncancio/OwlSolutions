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
      name: 'POS con facturación electrónica DIAN',
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
      cta: 'Ver el POS con facturación DIAN',
      ctaHref: '/pos',
      artifact: 'pos',
      photo: {
        png: '/images/pos-barista.png',
        webp: '/images/pos-barista.webp',
        webpSmall: '/images/pos-barista-340.webp',
        webpMedium: '/images/pos-barista-560.webp',
        alt: 'Barista facturando una venta desde el POS de Siwina en una tablet con datáfono',
        width: 680,
        height: 580,
      },
    },
    {
      id: 'agentes-ia',
      eyebrow: 'Atención al cliente',
      name: 'Agentes de IA para soporte y atención',
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
      cta: 'Ver los agentes de IA para atención',
      ctaHref: '/agentes-ia',
      artifact: 'agent',
      photo: {
        png: '/images/support-headphones.png',
        webp: '/images/support-headphones.webp',
        webpSmall: '/images/support-headphones-340.webp',
        webpMedium: '/images/support-headphones-560.webp',
        alt: 'Agente de soporte con diadema atendiendo clientes con ayuda de IA',
        width: 680,
        height: 453,
      },
    },
    {
      id: 'plataforma-ventas',
      eyebrow: 'Ventas',
      name: 'Plataforma de ventas con agente de IA',
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
      cta: 'Ver la plataforma de ventas con IA',
      ctaHref: '/plataforma-ventas',
      artifact: 'pipeline',
      photo: {
        png: '/images/team-group.png',
        webp: '/images/team-group.webp',
        webpSmall: '/images/team-group-340.webp',
        webpMedium: '/images/team-group-560.webp',
        alt: 'Equipo comercial revisando en laptop y celular el pipeline de ventas de Siwina',
        width: 680,
        height: 453,
      },
    },
  ];

  /** Se deriva del catalogo para que la volanta nunca contradiga a la lista. */
  protected readonly productCount = String(this.products.length).padStart(2, '0');
}
