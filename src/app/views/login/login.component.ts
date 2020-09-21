import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UserAuthenticatedModel } from "../../models/user.authenticated.model";
import { UserModel } from "../../models/user.model";
import { AuthenticationService } from "../../services/authentication.service";
import { UserAlthenticatedUtil } from "../../utils/userauthenticated.utils";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  @ViewChild("username") usernameInputRef: ElementRef;
  @ViewChild("password") passwordInputRef: ElementRef;

  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) {}

  login() {
    if (
      this.usernameInputRef.nativeElement.value.trim() &&
      this.passwordInputRef.nativeElement.value.trim()
    ) {
      var userModel = new UserModel();
      userModel.username = this.usernameInputRef.nativeElement.value.trim();
      userModel.password = this.passwordInputRef.nativeElement.value.trim();

      this.authenticationService.login(userModel).subscribe(
        (res: UserAuthenticatedModel) => {
          if (res.user.id > 0 && res.token != null) {
            UserAlthenticatedUtil.removeAvatarUser();
            UserAlthenticatedUtil.setAvatarUser(res.user.imageBaseData);
            res.user.imageBaseData = "";
            UserAlthenticatedUtil.clear();
            UserAlthenticatedUtil.set(res);
            this.route.navigate(["/dashboard"]);
          } else {
            alert("Credenciais Inválidas, tente novamente!");
          }
        },
        (error: any) => {
          if (error.status == 404) {
            alert("Credenciais Inválidas");
          }
        }
      );
    } else {
      alert("Informe as credenciais para continuar!");
    }
  }
}
