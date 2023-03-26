import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IAuthContext {
  user: IUser;
  signIn: (data: IDataSignIn) => Promise<boolean>;
  signOut: (data: IDataSignIn) => Promise<void>;
}

export interface IUser {
  id: number;
  email: string;
  acessToken: string;
  name: string;
}
