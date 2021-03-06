import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      tap(
        (event) => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        (error) => (status = 'failed')
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message =
          req.method +
          ' ' +
          req.urlWithParams +
          ' ' +
          status +
          ' in ' +
          elapsedTime +
          'ms';

        this.logDetails(message);
      })
    );
  }
  private logDetails(msg: string): void {
    console.log(msg);
  }
}
