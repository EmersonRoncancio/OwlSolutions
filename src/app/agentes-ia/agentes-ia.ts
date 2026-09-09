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
  selector: 'app-agentes-ia',
  imports: [Breadcrumbs, PageHero, ContentBlock, FeatureGrid, Faq, RelatedLinks, CtaBand],
  templateUrl: './agentes-ia.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentesIa {
  private readonly seo = inject(Seo);

  protected readonly breadcrumbs: readonly BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Soy Alondra', path: '/agentes-ia' },
  ];

  protected readonly heroHighlights: readonly string[] = [
    'WhatsApp, chat web y voz',
    'Atención 24/7',
    'Escalamiento a un humano',
  ];

  protected readonly intro: readonly string[] = [
    'Un agente de IA no es un menú de opciones disfrazado de chat. Es un sistema que entiende lo que el cliente escribe o dice, busca la respuesta en la información de tu negocio y resuelve — agenda, confirma, consulta un estado — en lugar de limitarse a repetir un guion.',
    'La diferencia con un chatbot tradicional está en el manejo de lo inesperado. El chatbot se rompe cuando la pregunta no está en el árbol; el agente interpreta la intención y responde con lo que sabe del negocio.',
    'Los agentes de Siwina se entrenan con la información real de tu operación: catálogo, políticas, horarios y procesos. Y cuando una conversación necesita criterio humano, la escalan en lugar de improvisar.',
  ];

  protected readonly channels: readonly Feature[] = [
    {
      title: 'WhatsApp',
      description:
        'El canal donde de verdad escriben tus clientes en Colombia. El agente responde consultas repetitivas, toma datos y agenda sin hacer esperar a nadie.',
    },
    {
      title: 'Chat web',
      description:
        'Atiende a quien está navegando tu sitio en el momento exacto en el que tiene la duda, que es cuando todavía se puede convertir en venta.',
    },
    {
      title: 'Voz',
      description:
        'Atiende llamadas para resolver consultas frecuentes y tomar información, sin dejar a nadie escuchando música de espera.',
    },
  ];

  protected readonly capabilities: readonly Feature[] = [
    {
      title: 'Entrenado con tu negocio',
      description:
        'Responde con tu catálogo, tus políticas y tus horarios, no con información genérica de internet.',
    },
    {
      title: 'Disponible 24/7',
      description:
        'La consulta de las once de la noche o del domingo se responde igual que la del martes a media mañana.',
    },
    {
      title: 'Escalamiento automático a un humano',
      description:
        'Cuando la conversación excede lo que el agente debe resolver, pasa a una persona con todo el contexto ya recogido.',
    },
    {
      title: 'Automatización de tareas repetitivas',
      description:
        'Agendar, confirmar, recordar y tomar datos deja de consumir el tiempo de tu equipo de soporte.',
    },
    {
      title: 'Métricas de conversación',
      description:
        'Volumen atendido, temas más frecuentes, tasa de escalamiento y satisfacción, para saber dónde ajustar.',
    },
    {
      title: 'Un solo criterio de respuesta',
      description:
        'Todos los clientes reciben la misma información, sin depender de qué tan cargado esté el turno.',
    },
  ];

  protected readonly useCases: readonly string[] = [
    'Negocios que reciben las mismas preguntas todo el día y responden tarde por volumen',
    'Equipos de soporte pequeños que no pueden crecer al ritmo de las consultas',
    'Operaciones con atención fuera de horario laboral o los fines de semana',
    'Empresas que pierden clientes porque nadie contestó el WhatsApp a tiempo',
  ];

  protected readonly implementation: readonly string[] = [
    'La puesta en marcha empieza por entender qué te preguntan hoy y con qué información se responde. Ese material es el que alimenta al agente.',
    'Definimos juntos qué puede resolver solo, qué debe confirmar y en qué casos tiene que escalar a una persona. Ese límite es lo que hace que un agente sea confiable.',
    'Después conectamos los canales, probamos con conversaciones reales y ajustamos. El soporte posterior es en español y directo con nuestro equipo.',
  ];

  protected readonly faq: readonly FaqItem[] = [
    {
      question: '¿Qué diferencia hay entre un agente de IA y un chatbot?',
      answer:
        'Un chatbot sigue un árbol de opciones y se rompe cuando la pregunta no está previsto. Un agente de IA interpreta la intención del cliente, busca la respuesta en la información de tu negocio y puede ejecutar acciones como agendar o consultar un estado.',
    },
    {
      question: '¿El agente puede atender por WhatsApp?',
      answer:
        'Sí. WhatsApp, chat web y voz son los canales que atendemos. Puedes empezar por uno solo y sumar los demás cuando la operación lo pida.',
    },
    {
      question: '¿Qué pasa cuando el agente no sabe responder?',
      answer:
        'Escala la conversación a una persona de tu equipo con el contexto ya recogido, en lugar de inventar una respuesta o dejar al cliente en un callejón sin salida.',
    },
    {
      question: '¿Con qué información se entrena el agente?',
      answer:
        'Con la información de tu negocio: catálogo, políticas, horarios y procesos. Parte de la implementación consiste justamente en organizar ese material.',
    },
    {
      question: '¿Reemplaza a mi equipo de soporte?',
      answer:
        'No es el objetivo. El agente absorbe las consultas repetitivas para que tu equipo dedique su tiempo a los casos que sí necesitan criterio humano.',
    },
  ];

  protected readonly related: readonly RelatedLink[] = [
    {
      label: 'Plataforma de ventas',
      path: '/plataforma-ventas',
      description: 'Cuando la conversación es una oportunidad comercial y no una consulta de soporte.',
    },
    {
      label: 'Software POS',
      path: '/pos',
      description: 'El punto de venta con facturación DIAN, inventario y reportes.',
    },
    {
      label: 'Sobre Siwina',
      path: '/nosotros',
      description: 'Quiénes construimos y mantenemos los productos que ves aquí.',
    },
  ];

  constructor() {
    this.seo.apply({
      path: '/agentes-ia',
      title: 'Agentes de IA para atención al cliente y WhatsApp | Siwina',
      description:
        'Agentes de inteligencia artificial que atienden por WhatsApp, chat web y voz 24/7, entrenados con la información de tu negocio y con escalamiento a un humano.',
      breadcrumbs: this.breadcrumbs,
      faq: this.faq,
      schema: [
        {
          '@type': 'Service',
          '@id': `${absoluteUrl('/agentes-ia')}#service`,
          name: 'Soy Alondra',
          alternateName: 'Agentes de IA para soporte y atención',
          serviceType: 'Atención al cliente con inteligencia artificial',
          url: absoluteUrl('/agentes-ia'),
          description:
            'Agentes de IA que responden, agendan y resuelven por WhatsApp, chat web y voz 24/7, con escalamiento a un agente humano y métricas de conversación.',
          provider: { '@id': ORGANIZATION_ID },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      ],
    });
  }
}
