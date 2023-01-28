import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";

interface IPropsProviders {
  children: ReactNode;
}

export function Providers({ children }: IPropsProviders) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>;
    </AuthProvider>
  );
}
