import { DATABASE_USERS } from "../services";
import { IDataSignIn, IDataSignUp, IResponseSigInApi } from "./types";

const findUserEmail = (email: string) => DATABASE_USERS.find((user) => user.email === email);

export const sigInApi = async ({ email, password }: IDataSignIn): Promise<IResponseSigInApi> => {
  const filterResult = findUserEmail(email);
  if (filterResult?.password === password) {
    const { email, id, name } = filterResult;
    const data = { id, email, name, acessToken: "acessToken" };
    return { detail: { status: "ok" }, data };
  }
  return { detail: { status: "error", description: "email ou senha invalidos" } };
};

export const sigUpApi = async ({ email, name, password }: IDataSignUp): Promise<IResponseSigInApi> => {
  const filterResult = findUserEmail(email);

  if (filterResult) {
    return { detail: { status: "error", description: "usuario ja existente" } };
  }

  const newUser = { id: DATABASE_USERS.length, email, name, password };
  DATABASE_USERS.push(newUser);

  return { detail: { status: "ok" } };
};
