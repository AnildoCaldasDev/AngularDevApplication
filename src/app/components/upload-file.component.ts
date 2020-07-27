import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HandlingFilesService } from "../services/handling-files.service";
import { Subscription } from "rxjs";
import { environment } from "../../environments/environment";
import { uploadProgress, filterResponse } from "../shared/rxjs-operators";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
})
export class UploadFileComponent implements OnInit, OnDestroy {
  @Input() buttonUploadName: string;
  @Input() url: string;
  @Input() resetAfterUpload: boolean;

  files: Set<File>;
  uploadSubscription: Subscription;
  progress = 0;

  constructor(
    private toastr: ToastrService,
    private handlingFilesService: HandlingFilesService
  ) {}

  ngOnInit(): void {}

  onChange(event) {
    const selectedFiles = <FileList>event.srcElement.files;
    //document.getElementById("customFileLabel").innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById("customFileLabel").innerHTML = fileNames.join(", ");
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.uploadSubscription = this.handlingFilesService
        .upload(this.files, environment.BASE_URL + this.url)
        .pipe(
          uploadProgress((progress) => {
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe(
          (resposse) => {
            this.toastr.success(
              "Upload efetuado com sucesso!",
              "Upload Status"
            );

            if (this.resetAfterUpload) {
              setTimeout(() => {
                this.onReset();
              }, 1100);
            }
          },
          (error) => {
            setTimeout(() => {
              this.progress = 0;
            }, 300);
            this.toastr.error(
              "Erro ao fazer upload de arquivo. Error: " + error.message,
              "Upload Failed"
            );
          }
        );
    }
  }

  onReset() {
    this.progress = 0;
    this.files = null;
    document.getElementById("customFileLabel").innerHTML = "";
  }

  ngOnDestroy(): void {
    console.log("unsubscribing");
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }
}
