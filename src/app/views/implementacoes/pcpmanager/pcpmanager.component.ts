import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PcpProductModel } from "../../../models/pcpproduct.model";
import { PcpManagerService } from "../../../services/pcpmanager.service";
import {
  tap,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { Router } from "@angular/router";
import { ResponseModel } from "../../../models/response.model";

@Component({
  selector: "app-pcpmanager",
  templateUrl: "./pcpmanager.component.html",
})
export class PcpmanagerComponent implements OnInit {
  public products$: Observable<PcpProductModel[]>;
  public total: Number = 0;

  constructor(
    private pcpManagerService: PcpManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.products$ = this.pcpManagerService.getAll().pipe(
      tap((res: any) => (this.total = res.total)),
      map((res: any) => res.result)
    );
  }

  redirectEditPage(id: number) {
    //send param with link:
    //<a [routerLink]="['/hero', hero.id]">
    //https://angular-2-training-book.rangle.io/routing/query_params

    //this.router.navigate(["/implementacoes/pcpmanageredit", { id: id }]);
    this.router.navigate(["/implementacoes/pcpmanageredit/"], {
      queryParams: { id: id },
    });
  }

  deleteConfirm(id: number) {
    if (window.confirm("Deseja realmente excluir?")) {
      this.pcpManagerService.delete(id).subscribe(
        (res: ResponseModel) => {
          if (res.result == true) {
            alert(res.message);
            this.onSearch();
          }
        },
        (err) => {
          console.log("Erro ao incluir", err);
        }
      );
    }
  }
}
