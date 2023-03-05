import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useCallback, useState, useMemo } from "react";

import { IDataSignIn, sigInApi } from "../../api";
import { IProps, IAuthContext, IUser } from "./types";

const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: IProps) {
  const toast = useToast();
  const [user, setUser] = useState<IUser>(JSON.parse(localStorage.getItem("@Doit:user") || "{}") as IUser);

  const signIn = useCallback(async (data: IDataSignIn) => {
    const res = await sigInApi(data);
    if (res?.detail.status === "ok") {
      localStorage.setItem("@Doit:user", JSON.stringify(res));
      setUser(res.data as IUser);
      return true;
    }
    toast({ position: "top-right", title: res.detail.description, status: "error" });
    return false;
  }, []);

  const signOut = async () => {
    localStorage.removeItem("@Doit:user");
    setUser({} as IUser);
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
