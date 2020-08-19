import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {
  tap,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { ReactivesearchService } from "../../../services/reactivesearch.service";

@Component({
  selector: "app-reactivesearch",
  templateUrl: "./reactivesearch.component.html",
})
export class ReactiveSearchComponent implements OnInit {
  queryField = new FormControl();
  readonly SEARCH_URL = "https://api.cdnjs.com/libraries";
  readonly FIELDS = "name,description,version,homepage";

  results$: Observable<any>;
  total: number = 0;

  constructor(
    private http: HttpClient,
    private reactiveSearchService: ReactivesearchService
  ) {}

  ngOnInit(): void {
    // this.results$ = this.queryField.valueChanges.pipe(
    //   map((value) => value.trim()),
    //   filter((value) => value.length > 1),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   switchMap((value) =>
    //     this.http.get(this.SEARCH_URL, {
    //       params: {
    //         search: value,
    //         fields: this.FIELDS,
    //       },
    //     })
    //   ),
    //   tap((res: any) => (this.total = res.total)),
    //   map((res: any) => res.results)
    // );
    this.results$ = this.queryField.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => this.reactiveSearchService.search(value)),
      tap((res: any) => {
        this.total = res.total;
      }),
      map((res: any) => res.results)
    );
  }

  onSearch(): void {
    let value = this.queryField.value;

    if (value && (value = value.trim()) !== "") {
      const fields = "name,description,version,homepage";
      // const params = {
      //   search: value,
      //   fields: fields,
      // };

      let params = new HttpParams();
      params = params.set("search", value);
      params = params.set("fields", fields);

      this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => (this.total = res.total)),
        map((res: any) => res.results)
      );
    }
  }
}
