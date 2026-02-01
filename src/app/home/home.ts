import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Projects } from "./components/projects/projects";
import { About } from "./components/about/about";
import { Technologies } from "./components/technologies/technologies";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/Footer/Footer";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Projects, About, Technologies, Cta, Footer],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home { }
