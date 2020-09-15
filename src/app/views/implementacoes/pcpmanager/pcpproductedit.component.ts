import { Component, OnInit, Input } from "@angular/core";
import { PcpProductModel } from "../../../models/pcpproduct.model";
import { ResponseModel } from "../../../models/response.model";
import { PcpManagerService } from "../../../services/pcpmanager.service";
import { tap, map, switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs";
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-pcpproductedit",
  templateUrl: "./pcpproductedit.component.html",
})
export class PcpProductEditComponent implements OnInit {
  //@Input() product: PcpProductModel;

  public productForm: FormGroup;
  public product: PcpProductModel;
  public response: ResponseModel = null;
  public productId: number = 0;

  constructor(
    private pcpManagerService: PcpManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.productForm = new FormGroup({
      //name: new FormControl({ disabled: true, value: null }),
      id: new FormControl("0"),
      title: new FormControl(""),
      description: new FormControl(""),
      price: new FormControl(""),
      categoriaId: new FormControl("0"),
    });
  }

  // productForm = this.formBuilder.group({
  //   id: [0],
  //   title: ["", Validators.required],
  //   description: ["", Validators.required],
  //   price: [0, Validators.required],
  //   categoriaId: [0, Validators.required, Validators.min(1)],
  // });

  ngOnInit(): void {
    //console.log(this.product);

    // this.products$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.pcpManagerService.getProduct(Number(params.get("id")))
    //   )
    // );

    this.route.queryParams.subscribe((params) => {
      this.productId = +params["id"] || 0;
      if (this.productId > 0) {
        console.log(this.productId);
        // this.products$ = this.pcpManagerService.getProduct(this.productId).pipe(
        //   tap((res: any) => console.log(res)),
        //   map((res: any) => res)
        // );

        this.pcpManagerService.getProduct(this.productId).subscribe(
          (res) => {
            this.product = res;
            console.log(this.product);
            if (this.product.id > 0) {
              this.loadProductFormData(this.product);
            }
          },
          (err) => {
            console.log("Erro ao incluir", err);
          }
        );
      }
    });
  }

  loadProductFormData(product: PcpProductModel) {
    this.productForm.get("title").patchValue(product.title);
    this.productForm.get("description").patchValue(product.description);
    this.productForm.get("price").patchValue(product.price);
    this.productForm.get("categoriaId").patchValue(product.categoryId);
    this.productForm.get("id").patchValue(product.id);
  }

  post() {
    var product = new PcpProductModel();
    product.id = +this.productForm.get("id").value;
    product.title = this.productForm.get("title").value;
    product.description = this.productForm.get("description").value;
    product.price = +this.productForm.get("price").value;
    product.categoryId = +this.productForm.get("categoriaId").value;

    if (product.id > 0) {
      this.pcpManagerService.update(product).subscribe(
        (res) => {
          this.response = res;
          if (this.response.result == true) {
            alert(this.response.message);
            this.router.navigate(["/implementacoes/pcpmanager"]);
          }
        },
        (err) => {
          console.log("Erro ao incluir", err);
        }
      );
    } else {
      this.pcpManagerService.add(product).subscribe(
        (res) => {
          this.response = res;
          if (this.response.result == true) {
            alert("Adicionado com sucesso!");
            this.router.navigate(["/implementacoes/pcpmanager"]);
          }
        },
        (err) => {
          console.log("Erro ao incluir", err);
        }
      );
    }

    // this.pcpManagerService.add(product).pipe(
    //   tap((res: ResponseModel) => {
    //     this.response = res;
    //     if (this.response.result == true) {
    //       alert("Adicionado com sucesso!");
    //     }
    //   })
    // );

    // this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
    //   tap((res: any) => (this.total = res.total)),
    //   map((res: any) => res.results)
    // );
  }
}
