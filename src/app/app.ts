import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nabvar } from "./common/components/ nabvar/ nabvar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nabvar],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('OwlSolutions');
}
