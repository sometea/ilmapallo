// angular bootstrapping

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { FormBuilder } from '@angular/common';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDER } from './router';

const main = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDER, FormBuilder]);
});

export { main };
