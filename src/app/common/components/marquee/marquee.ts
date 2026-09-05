import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Cinta corrediza de capacidades. Es decoracion: el mismo contenido ya esta escrito
 * en las secciones de producto, asi que la franja entera queda fuera del arbol de
 * accesibilidad en vez de repetirle la lista a un lector de pantalla.
 *
 * La pista se pinta dos veces a proposito. Cuando la primera copia termina de
 * desplazarse su ancho completo, la segunda ocupa exactamente su lugar y la animacion
 * reinicia sin que se vea el corte.
 */
@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  protected readonly items: readonly string[] = [
    'Facturación electrónica DIAN',
    'Documento equivalente',
    'Inventario en tiempo real',
    'Multi-sucursal',
    'Modo offline',
    'Agentes de IA 24/7',
    'WhatsApp, chat web y voz',
    'Pipeline de ventas',
    'Reportes por canal',
    'Soporte en español',
  ];
}
