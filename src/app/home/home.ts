import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home { }
