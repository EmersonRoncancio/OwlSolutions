import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technologies {

  technologies = signal<{ name: string; category: string }[]>([
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "NestJs", category: "Backend" },
    { name: "Angular", category: "Frontend" },
    { name: "Git", category: "Version Control" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "WordPress", category: "CMS" },
  ])
}
