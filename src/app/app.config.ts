import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Every route is prerendered. Without hydration the client bootstrap discards the
    // prerendered DOM and rebuilds it, which re-creates the hero <img> and pushes the
    // LCP past the first paint. Event replay keeps taps that land mid-bootstrap.
    provideClientHydration(withEventReplay()),
    provideRouter(
      routes,
      // Route params reach components as signal inputs (used by `/blog/:slug`).
      withComponentInputBinding(),
      // Landing on a new page starts at the top; #anchors still resolve.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
  ],
};
