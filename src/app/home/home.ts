import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { Trust } from './components/trust/trust';
import { Cta } from './components/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, Products, About, Trust, Cta],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
