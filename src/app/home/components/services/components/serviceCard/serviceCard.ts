import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'service-card',
  imports: [MatIconModule],
  templateUrl: './serviceCard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCard {
  description = input.required<string>();
  title = input.required<string>();
  icon = input.required<string>();
 }
