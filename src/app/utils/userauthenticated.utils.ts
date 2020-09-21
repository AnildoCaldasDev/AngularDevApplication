import { UserAuthenticatedModel } from "../models/user.authenticated.model";

export class UserAlthenticatedUtil {
  static get(): UserAuthenticatedModel {
    const data = localStorage.getItem("app.userauthenticated");
    if (!data) return null;
    return JSON.parse(data);
  }

  static set(data: UserAuthenticatedModel) {
    localStorage.setItem("app.userauthenticated", JSON.stringify(data));
  }

  static clear() {
    localStorage.removeItem("app.userauthenticated");
  }

  static setAvatarUser(imageB64: string) {
    localStorage.setItem("app.avataruser", imageB64);
  }

  static removeAvatarUser() {
    localStorage.removeItem("app.avataruser");
  }

  static getAvatarUser() {
    return localStorage.getItem("app.avataruser");
  }
}
