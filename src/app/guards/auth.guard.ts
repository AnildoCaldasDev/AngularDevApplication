import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserAlthenticatedUtil } from "../utils/userauthenticated.utils";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const userAuthenticated = UserAlthenticatedUtil.get();

    if (
      userAuthenticated &&
      userAuthenticated.user.id > 0 &&
      userAuthenticated.token
    ) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
