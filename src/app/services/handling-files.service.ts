import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HandlingFilesService {
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

  download(url: string) {
    return this.http.get(url, {
      responseType: "blob" as "json",
    });
  }

  handleFiles(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type,
    });

    //quando for o navegador IE procedo com esta chamada.
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    //quando não for o navegador IE faço esta chamada:
    //crio o blob de arquivo
    const blob = window.URL.createObjectURL(file);

    //crio o link para download:
    const link = document.createElement("a");
    link.href = blob;
    link.download = fileName;
    //link.click(); ---> só funciona no Google Chrome

    //Quando for usar no firefox:
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    // Naõ precisa no Google Chrome.
    setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);

    //este remove não funciona no FireFox, usar exemplo acima:
    // window.URL.revokeObjectURL(blob);
    // link.remove();
  }
}
