import { IUser } from "../providers/Auth/types";

export interface IDataSignIn {
  email: string;
  password: string;
}

export interface IDataSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IResponseSigInApi {
  detail: {
    status: string;
    description?: string;
  };
  data?: IUser;
}
