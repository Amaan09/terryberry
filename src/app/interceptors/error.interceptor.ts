import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IError } from '../shared/models/error/error.interface';

export class ErrorInterceptor implements HttpInterceptor {

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return handleError(error);
      })
    );
  }
}

export function handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
  let errorReturned: IError;
  if (error.error instanceof ErrorEvent) {
    console.error('Client error occurred:', error.error?.message);
  } else {
    console.error('Server error occured:', error);
    errorReturned = {
      statusCode: error.status || 500,
      message: error.message || error?.message || 'Server Unavailable',
      details: error.error?.details || error || 'Error occurred',
    };
  }
  return throwError(errorReturned);
}
