import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../providers/Auth";
import { LoginForm } from "./LoginForm";
import { LoginInfo } from "./LoginInfo";

export function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.acessToken) {
      navigate("/dashboard");
    }
  }, [user]);

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
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
    >
      <Flex w={["full", "full", "90%", "70%"]} justifyContent="center" alignItems="center" flexDirection={["column", "column", "row"]}>
        <LoginInfo />
        <LoginForm />
      </Flex>
    </Flex>
  );
}
