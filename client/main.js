// angular bootstrapping

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';

let main = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent, [HTTP_PROVIDERS]);
});

export { main };
