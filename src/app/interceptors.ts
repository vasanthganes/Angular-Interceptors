import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CustomHeaders implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
          'Authorization': 'token 123',
          'WEB-API-key': 'test',
          'Content-Type': 'application/json'
        });
        const modified = req.clone({headers});
        return next.handle(modified);
    }
}
