import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CONFIG } from './const.enviroment';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = CONFIG.TOKEN;

    //1) Clonamos el request
    request = request.clone({ setHeaders: { Authorization: 'Bearer ' + TOKEN } });

    return next.handle(request).pipe(catchError((error : HttpErrorResponse) =>{
      console.log(error);
      return throwError(error);
    }));
  }
}
