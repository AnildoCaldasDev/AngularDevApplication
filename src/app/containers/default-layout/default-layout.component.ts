import { Component, OnInit, OnDestroy } from "@angular/core";
import { navItems } from "../../_nav";
import { CartModel } from "../../models/cart.model";
import { Observable, Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import { Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { FileUploadModel } from "../../models/fileupload.model";
import { UserService } from "../../services/user.service";
import { UserAlthenticatedUtil } from "../../utils/userauthenticated.utils";
import { BibliotecarxjsService } from '../../services/bibliotecarxjs.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  cart$: Observable<CartModel>;
  avataruser: string = "https://avatars3.githubusercontent.com/u/583231?v=4";
  showShoppingCart: boolean = false;
  subscription: Subscription;

  constructor(
    private store: Store<{ cart: CartModel }>,
    private route: Router,
    private userService: UserService,
    private _bblRjxs: BibliotecarxjsService
  ) {
    this.cart$ = store.pipe(select("cart"));
    this.avataruser = UserAlthenticatedUtil.getAvatarUser();
    //console.log(this.avataruser);
    this.subscription = this._bblRjxs.consultaModeloPlano().subscribe(result => {
        if (result.idModeloPlano == 1){
          this.showShoppingCart = true;
        }else{
          this.showShoppingCart = false;
        }
    }, error => {
        window.alert(error);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  public sidebarMinimized = false;
  public navItems = navItems;
  ImageBaseData: string | ArrayBuffer = null;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    if (confirm("Deseja realmente sair?")) {
      UserAlthenticatedUtil.removeAvatarUser();
      UserAlthenticatedUtil.clear();
      this.route.navigate(["/login"]);
    }
  }
  //referencia para chamar input atraves do click
  ///https://stackoverflow.com/questions/37320135/how-to-trigger-click-event-of-input-file-from-button-click-in-angular-2
  chooseUserAvatar(event) {
    if (event.target.files.length == 0) {
      window.alert("Operação foi cancelada pelo usuário!");
    } else {
      let me = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        me.ImageBaseData = reader.result;

        var fileUploadViewModel: FileUploadModel = {
          ImageBaseData: me.ImageBaseData.toString(),
        };

        me.userService.changeUserAvatar(fileUploadViewModel).subscribe(
          (res: any) => {
            if (res) {
              UserAlthenticatedUtil.removeAvatarUser();
              UserAlthenticatedUtil.setAvatarUser(
                fileUploadViewModel.ImageBaseData.toString()
              );
              me.avataruser = UserAlthenticatedUtil.getAvatarUser();
            } else {
              alert("Houve um erro ao garva a Imagem!");
            }
          },
          (error) => {
            alert("Houve um erro ao garva a Imagem. Erro: " + error);
          }
        );
      };

      reader.onerror = function (error) {
        window.alert("Erro ao tentar ler arquivo. Erro:" + error);
      };
    }
  }
}
