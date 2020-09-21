import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserAuthenticatedModel } from "../models/user.authenticated.model";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(user: UserModel) {
    return this.http.post<UserAuthenticatedModel>(
      `${environment.API}users/login`,
      user
    );
  }
}
