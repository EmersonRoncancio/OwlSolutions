import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './common/components/navbar/navbar';
import { Footer } from './common/components/footer/footer';
import { WhatsApp } from './common/components/whatsapp/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsApp],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
