import { NgModule } from "@angular/core";
import { DownloadFileComponent } from "../components/download-file.component";
import { UploadFileComponent } from "../components/upload-file.component";

@NgModule({
  declarations: [DownloadFileComponent, UploadFileComponent],
  imports: [],
  exports: [DownloadFileComponent, UploadFileComponent],
})
export class SharedModule {}
