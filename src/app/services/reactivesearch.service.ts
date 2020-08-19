import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ReactivesearchService {
  constructor(private http: HttpClient) {}

  readonly SEARCH_URL = "https://api.cdnjs.com/libraries";
  readonly FIELDS = "name,description,version,homepage";

  search(value: string): Observable<any> {
    return this.http
      .get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.FIELDS,
        },
      })
      .pipe(map((res: any) => res));
  }
}
