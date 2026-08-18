import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductSection } from './productSection/productSection';
import { Product } from './types/product.types';

@Component({
  selector: 'app-products',
  imports: [ProductSection],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  protected readonly products: readonly Product[] = [
    {
      id: 'pos-dian',
      eyebrow: 'Producto 01 · Punto de venta',
      name: 'POS con facturación electrónica DIAN',
      description:
        'Un punto de venta pensado para el comercio colombiano: factura electrónica validada ante la DIAN en segundos, control de inventario y reportes de ventas en un solo lugar.',
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
      image: {
        png: '/images/pos-barista.png',
        webp: '/images/pos-barista.webp',
        alt: 'Barista facturando una venta desde el POS de Siwina en una tablet con datáfono',
        width: 680,
        height: 580,
      },
      theme: 'light',
      imageFirst: false,
    },
    {
      id: 'agentes-ia',
      eyebrow: 'Producto 02 · Atención al cliente',
      name: 'Agentes de IA para soporte y atención',
      description:
        'Agentes de inteligencia artificial que responden, agendan y resuelven por WhatsApp, chat web y llamadas — disponibles 24/7 y con escalamiento a un humano cuando lo necesitan.',
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
      image: {
        png: '/images/support-headphones.png',
        webp: '/images/support-headphones.webp',
        alt: 'Agente de soporte con diadema atendiendo clientes con ayuda de IA',
        width: 680,
        height: 453,
      },
      theme: 'dark',
      imageFirst: true,
    },
    {
      id: 'plataforma-ventas',
      eyebrow: 'Producto 03 · Ventas',
      name: 'Plataforma de ventas con agente de IA',
      description:
        'Centraliza todos tus canales de venta en un solo lugar y deja que un agente de IA califique leads, haga seguimiento y agende reuniones por ti.',
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
      image: {
        png: '/images/team-group.png',
        webp: '/images/team-group.webp',
        alt: 'Equipo comercial revisando en laptop y celular el pipeline de ventas de Siwina',
        width: 680,
        height: 453,
      },
      theme: 'tint',
      imageFirst: false,
    },
  ];
}
