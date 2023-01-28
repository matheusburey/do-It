import { IUser } from "../providers/Auth/types";
import { DATABASE_USERS } from "../services";

export interface IDataSignIn {
  email: string;
  password: string;
}

export interface IResponseSigInApi {
  detail: {
    status: string;
    description?: string;
  };
  data?: IUser;
}

export const sigInApi = async ({ email, password }: IDataSignIn): Promise<IResponseSigInApi> => {
  const [filterResult] = DATABASE_USERS.filter((user) => user.email === email && user.password === password);
  if (filterResult) {
    const data = { id: filterResult.id, email: filterResult.email, acessToken: "acessToken" };
    return { detail: { status: "ok" }, data };
  }
  return { detail: { status: "error", description: "email ou senha invalidos" } };
};
