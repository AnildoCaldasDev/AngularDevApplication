import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { PcpProductModel } from "../models/pcpproduct.model";
import { ResponseModel } from "../models/response.model";

@Injectable({
  providedIn: "root",
})
export class PcpManagerService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<PcpProductModel[]>(`${environment.API}products`);
  }

  add(product: PcpProductModel) {
    return this.http.post<ResponseModel>(`${environment.API}products`, product);
  }

  getProduct(id: number) {
    return this.http.get<PcpProductModel>(`${environment.API}products/` + id);
    //return this.http.get<PcpProductModel>(`${environment.API}products/${id}`);
  }

  delete(id: number) {
    return this.http.delete<ResponseModel>(`${environment.API}products/` + id);
  }

  update(product: PcpProductModel) {
    return this.http.put<ResponseModel>(
      `${environment.API}products/` + product.id,
      product
    );
  }
}
