import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HandlingFilesService } from "../../../services/handling-files.service";
import { Subscription } from "rxjs";
import { environment } from "../../../../environments/environment";
import { filterResponse, uploadProgress } from "../../../shared/rxjs-operators";

@Component({
  selector: "app-handlefiles",
  templateUrl: "./handlefiles.component.html",
})
export class HandleFilesComponent implements OnInit, OnDestroy {
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
        .upload(this.files, environment.BASE_URL + "/upload")
        .pipe(
          uploadProgress((progress) => {
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe((resposse) =>
          this.toastr.success("Upload efetuado com sucesso!", "Upload Status")
        );
    }
  }

  ngOnDestroy(): void {
    console.log("unsubscribing");
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }

  // onDownloadExcel() {
  //   this.handlingFilesService
  //     .download(environment.BASE_URL + "/downloadExcel")
  //     .subscribe((res: any) => {
  //       this.handlingFilesService.handleFiles(res, "report.xlsx");
  //     });
  // }

  // onDownloadPdf() {
  //   this.handlingFilesService
  //     .download(environment.BASE_URL + "/downloadPdf")
  //     .subscribe((res: any) => {
  //       this.handlingFilesService.handleFiles(res, "report.pdf");
  //     });
  // }
}
