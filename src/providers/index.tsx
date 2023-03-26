import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { TasksProvider } from "./Tasks";

interface IPropsProviders {
  children: ReactNode;
}

export function Providers({ children }: IPropsProviders) {
  return (
    <AuthProvider>
      <TasksProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </TasksProvider>
    </AuthProvider>
  );
}
