import { Component, OnInit, Input } from "@angular/core";
import { HandlingFilesService } from "../services/handling-files.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-download-file",
  templateUrl: "./download-file.component.html",
})
export class DownloadFileComponent implements OnInit {
  public buttonNameDesc = "";

  constructor(private handlingFilesService: HandlingFilesService) {}

  @Input() fileName: string;
  @Input() url: string;
  @Input() buttonName: string;

  ngOnInit(): void {
    this.buttonNameDesc = this.buttonName;
  }

  onDownloadExcel() {
    this.handlingFilesService
      .download(environment.BASE_URL + "/" + this.url)
      .subscribe((res: any) => {
        this.handlingFilesService.handleFiles(res, this.fileName);
      });
  }
}
