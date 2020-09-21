import { Component, OnInit } from "@angular/core";
import { FileUploadModel } from "../../../models/fileupload.model";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-handlefiles",
  templateUrl: "./handlefiles.component.html",
})
export class HandleFilesComponent implements OnInit {
  ImageBaseData: string | ArrayBuffer = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      me.ImageBaseData = reader.result;
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  btnUpload() {
    if (this.ImageBaseData == null) {
      window.alert("Selecione uma imagem para enviar!");
    } else {
      var fileUploadViewModel: FileUploadModel = {
        ImageBaseData: this.ImageBaseData.toString(),
      };

      this.userService.changeUserAvatar(fileUploadViewModel).subscribe(
        (res: any) => {
          if (res) {
            alert("Imagem Gravada com sucesso!");
          } else {
            alert("Houve um erro ao garva a Imagem!");
          }
        },
        (error) => {
          alert("Houve um erro ao garva a Imagem. Erro: " + error);
        }
      );
    }
  }
}
