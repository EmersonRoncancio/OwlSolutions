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
  selector: 'app-plataforma-ventas',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './plataforma-ventas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlataformaVentas {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Mesa Origen', path: '/plataforma-ventas' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'Bandeja única de canales',
    'Calificación de leads con IA',
    'Pipeline y seguimiento',
  ];

  protected readonly intro: readonly string[] = [
    'La mayoría de los equipos comerciales no pierde ventas por falta de leads, sino por falta de seguimiento. El lead llega por WhatsApp, otro por Instagram, otro por el formulario del sitio, y cada canal vive en una pestaña distinta que alguien tiene que recordar revisar.',
    'La plataforma de ventas de Siwina centraliza esos canales en una sola bandeja y le suma un agente de IA que califica lo que entra, responde de inmediato y hace el seguimiento que en la práctica nadie alcanza a hacer.',
    'El resultado no es "más automatización" por sí sola: es que ninguna conversación se quede sin respuesta y que el equipo dedique su tiempo a los leads que de verdad tienen intención de compra.',
  ];

  protected readonly capabilities: readonly Feature[] = [
    {
      title: 'Bandeja única de canales',
      description:
        'WhatsApp, redes sociales y correo en una sola vista, para dejar de saltar entre aplicaciones y perder mensajes por el camino.',
    },
    {
      title: 'Agente de IA que califica leads',
      description:
        'Responde al instante, hace las preguntas que separan a un curioso de un comprador y ordena la lista por lo que importa.',
    },
    {
      title: 'Seguimiento automático',
      description:
        'El agente retoma la conversación que quedó a medias, en lugar de que el lead se enfríe esperando un recordatorio manual.',
    },
    {
      title: 'Pipeline de ventas',
      description:
        'Cada oportunidad con su etapa y su responsable, para ver en dónde se están trabando los negocios y no solo cuántos hay.',
    },
    {
      title: 'Agendamiento de reuniones',
      description:
        'El agente propone y confirma horarios, así el paso de la conversación a la reunión no depende de otro correo.',
    },
    {
      title: 'Reportes de conversión por canal',
      description:
        'Qué canal trae volumen y cuál trae ventas — que casi nunca son el mismo — para invertir donde realmente convierte.',
    },
  ];

  protected readonly problems: readonly string[] = [
    'Leads que llegan por varios canales y nadie consolida',
    'Conversaciones que se enfrían porque el seguimiento es manual',
    'Vendedores que dedican el día a filtrar en vez de a vender',
    'Cero visibilidad de qué canal trae ventas y cuál solo trae ruido',
  ];

  protected readonly howItWorks: readonly string[] = [
    'Conectamos tus canales de entrada a una sola bandeja y definimos qué información necesitas de cada lead para considerarlo calificado.',
    'El agente de IA responde de inmediato, recoge esa información y ubica la oportunidad en la etapa que le corresponde dentro del pipeline.',
    'Tu equipo entra donde aporta valor: la conversación con intención real de compra, con el contexto ya recogido y sin haber hecho esperar a nadie.',
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿Esto es un CRM?',
      answer:
        'Cubre lo que un equipo comercial necesita de un CRM —pipeline, seguimiento y reportes— pero parte de la conversación: los canales de entrada y el agente de IA que atiende y califica están integrados, no conectados por fuera.',
    },
    {
      question: '¿Qué canales se pueden centralizar?',
      answer:
        'WhatsApp, redes sociales y correo llegan a una misma bandeja, para que el equipo deje de saltar entre aplicaciones y no se pierda ningún mensaje.',
    },
    {
      question: '¿El agente de IA habla con mis clientes sin supervisión?',
      answer:
        'Tú defines qué resuelve solo y en qué punto entra una persona. El agente responde y califica, y escala la conversación al equipo cuando corresponde.',
    },
    {
      question: '¿Sirve si mi equipo de ventas es pequeño?',
      answer:
        'Es justamente el caso donde más se nota: cuando el equipo es pequeño, el seguimiento manual es lo primero que se cae y es también lo que más ventas cuesta.',
    },
    {
      question: '¿Se puede usar junto con el POS de Siwina?',
      answer:
        'Sí. Cada producto se adopta por separado, así que puedes empezar por la plataforma de ventas y sumar el POS o los agentes de atención cuando lo necesites.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Agentes de IA',
      path: '/agentes-ia',
      description: 'El mismo motor conversacional aplicado a soporte y atención al cliente.',
    },
    {
      label: 'Software POS',
      path: '/pos',
      description: 'Cierra la venta con facturación electrónica DIAN e inventario en tiempo real.',
    },
    {
      label: 'Contacto',
      path: '/contacto',
      description: 'Habla con el equipo por WhatsApp o correo y agenda una demo.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/plataforma-ventas',
      title: 'Plataforma de ventas con agente de IA y pipeline | Siwina',
      description:
        'Centraliza WhatsApp, redes y correo en una sola bandeja, califica leads con un agente de IA y gestiona tu pipeline de ventas con seguimiento automático.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'Service',
          '@id': `${absoluteUrl('/plataforma-ventas')}#service`,
          name: 'Mesa Origen',
          alternateName: 'Plataforma de ventas con agente de IA',
          serviceType: 'Automatización de ventas',
          url: absoluteUrl('/plataforma-ventas'),
          description:
            'Bandeja única para WhatsApp, redes y correo, con un agente de IA que califica leads, hace seguimiento y agenda reuniones, más pipeline y reportes de conversión.',
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
