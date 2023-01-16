import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";

interface IPropsProviders {
  children: ReactNode;
}

export function Providers({ children }: IPropsProviders) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
