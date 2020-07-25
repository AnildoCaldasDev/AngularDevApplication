import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UploadFilesService {
  constructor(private http: HttpClient) {}

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file, file.name));
    //versão com request puro
    // const request = new HttpRequest("POST", url, formData);
    // return this.http.request(request);

    //versaõ com http post tradicional:
    return this.http.post(url, formData, {
      observe: "events",
      reportProgress: true,
    });
  }
}
