import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { TokenService } from "../token.service";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (TokenService.hasToken()) {
      const token = TokenService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer: " + token,
        }
      });
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
          return throwError(error.statusText);
        })
      );
  }
}
