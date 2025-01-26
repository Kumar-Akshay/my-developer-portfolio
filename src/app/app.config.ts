import { provideRouter, RouterLink, RouterLinkActive, withRouterConfig } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({}) // Customize as needed
    ),
    importProvidersFrom(RouterLink, RouterLinkActive) // Ensure these directives are available globally
  ]
};
