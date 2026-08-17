import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsApp {}
