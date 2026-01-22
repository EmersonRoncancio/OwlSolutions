import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ServiceCard } from './components/serviceCard/serviceCard';

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {

  services = signal([
    {
      icon: "code",
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y escalables con las últimas tecnologías del mercado.",
    },
    {
      icon: "smartphone",
      title: "Apps Móviles",
      description:
        "Aplicaciones nativas e híbridas para iOS y Android con experiencias excepcionales.",
    },
    {
      icon: "domain",
      title: "Sistemas Empresariales",
      description:
        "ERPs, CRMs y soluciones a medida que optimizan los procesos de tu empresa.",
    },
    {
      icon: "cloud",
      title: "Cloud & DevOps",
      description:
        "Infraestructura en la nube, CI/CD y automatización para máxima eficiencia.",
    },
    {
      icon: "autorenew",
      title: "Automatización de procesos",
      description:
        "Automatizaciones inteligentes para optimizar y escalar tu operación.",
    },
    {
      icon: "show_chart",
      title: "Consultoría Tech",
      description:
        "Asesoría estratégica para transformación digital y adopción de nuevas tecnologías.",
    },
  ]);

}
