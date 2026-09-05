import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Cierre de caja del POS. Alturas de barra fijas y datos ilustrativos: el bloque
 * se expone como una sola imagen para que un lector de pantalla no lea cifras de
 * muestra como si fueran informacion.
 */
@Component({
  selector: 'app-pos-artifact',
  templateUrl: './pos-artifact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosArtifact {
  /** Ventas por franja horaria, en porcentaje del pico del dia. */
  protected readonly bars: readonly number[] = [22, 34, 28, 46, 58, 44, 62, 71, 55, 78, 88, 100];
}
