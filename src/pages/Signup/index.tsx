import { Flex } from "@chakra-ui/react";

import { ButtonGoBack } from "./ButtonGoBack";
import { SignupForm } from "./SignupForm";
import { SignupInfo } from "./SignupInfo";

export function Signup() {
  return (
    <Flex
      padding="10px 15px"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      color="white"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
    >
      <Flex w={["full", "full", "90%", "65%"]} justifyContent="center" flexDirection={["column-reverse", "column-reverse", "row"]}>
        <ButtonGoBack />
        <SignupForm />
        <SignupInfo />
      </Flex>
    </Flex>
  );
}
