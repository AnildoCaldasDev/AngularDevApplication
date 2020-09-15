import { Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      headers: req.headers.set("key", "DCtbqRXC8L"),
    });

    console.log(dupReq);
    return next.handle(dupReq);
    // return next.handle(dupReq).do((ev: HttpEvent<any>) => {
    //   if (ev instanceof HttpResponse) {
    //     console.log("Resposta tratada pelo interceptor: ", ev);
    //   }
    // });
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class InterceptorModule {}
