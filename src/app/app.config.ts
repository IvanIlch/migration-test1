import { provideRouter } from '@angular/router';
import { routes } from './routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
  ],
};
