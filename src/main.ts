import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {SETTINGS} from './app/core/settings';

declare let module: any;

if (SETTINGS.PROD) {
  enableProdMode();
} else {
  if (module.hot) {
    module.hot.accept();
  }
}

export function main() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

document.addEventListener('DOMContentLoaded', main);
