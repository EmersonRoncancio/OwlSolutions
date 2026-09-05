import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PipelineColumn {
  readonly title: string;
  readonly count: number;
  readonly leads: readonly { readonly name: string; readonly channel: string }[];
}

interface ChannelShare {
  readonly channel: string;
  readonly share: number;
}

/** Pipeline de ventas con el agente calificando leads. Datos ilustrativos. */
@Component({
  selector: 'app-pipeline-artifact',
  templateUrl: './pipeline-artifact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipelineArtifact {
  protected readonly columns: readonly PipelineColumn[] = [
    {
      title: 'Nuevos',
      count: 12,
      leads: [
        { name: 'Panadería El Trigal', channel: 'WhatsApp' },
        { name: 'Café Andino', channel: 'Instagram' },
      ],
    },
    {
      title: 'Calificados',
      count: 7,
      leads: [
        { name: 'Minimercado Sur', channel: 'Web' },
        { name: 'Restaurante Nube', channel: 'WhatsApp' },
      ],
    },
    {
      title: 'Cierre',
      count: 3,
      leads: [{ name: 'Distribuidora Kali', channel: 'Email' }],
    },
  ];

  protected readonly channels: readonly ChannelShare[] = [
    { channel: 'WhatsApp', share: 42 },
    { channel: 'Web', share: 31 },
    { channel: 'Instagram', share: 27 },
  ];
}
