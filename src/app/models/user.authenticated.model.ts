import { UserModel } from "./user.model";

export class UserAuthenticatedModel {
  public user: UserModel;
  public token: string;
}
