import { pipe } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { HttpEventType, HttpEvent, HttpResponse } from "@angular/common/http";

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type == HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

export function uploadProgress<T>(
  callBackOperator: (progress: number) => void
) {
  return tap((event: HttpEvent<T>) => {
    if (event.type == HttpEventType.UploadProgress) {
      callBackOperator(Math.round((event.loaded * 100) / event.total));
    }
  });
}
