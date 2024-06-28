import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export function moviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  req = req.clone({headers: req.headers.set('X-RapidApi-Key', '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7')})
  return next(req);
}
