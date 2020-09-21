import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { FileUploadModel } from "../models/fileupload.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  changeUserAvatar(fileUploadModel: FileUploadModel) {
    return this.http
      .post(
        `https://localhost:5001/v1/users/UploadProfileImage`,
        fileUploadModel
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }
}
