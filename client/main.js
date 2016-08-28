// angular bootstrapping

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// const main = document.addEventListener('DOMContentLoaded', () => {
//   bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDER, FormBuilder]);
// });

// export { main };

platformBrowserDynamic().bootstrapModule(AppModule);
