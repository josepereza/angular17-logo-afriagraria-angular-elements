import { BrowserModule, bootstrapApplication, createApplication } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { LogoComponent } from './app/components/logo/logo.component';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

(async () => {

  const app = await createApplication({
    providers: [provideAnimations()]

  });

  const toogleElement = createCustomElement(LogoComponent, {
    injector: app.injector,
  });

  customElements.define('logo-element', toogleElement);

})();