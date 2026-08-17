import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trust {
  protected readonly clients: readonly string[] = [
    'Fundación Creando Quien Tú Eres',
    'Fundatega',
    'Metodic Business',
  ];
}
