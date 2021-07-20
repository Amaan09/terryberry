import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
