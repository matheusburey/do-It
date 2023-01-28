import { Flex, Grid, Image, Heading, Text } from "@chakra-ui/react";

import logoSegundaria from "../../assets/logo-secondary.svg";
import { FormLogin } from "./FormLogin";

export function Login() {
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
        <Grid w={["full", "full", "50%"]} paddingRight="50px">
          <Image src={logoSegundaria} alt="logo doit" boxSize={["120px", "120px", "150px"]} />
          <Heading as="h1" my="4">
            O jeito fácil, gratis
          </Heading>
          <Text width={["auto", "350px"]}>
            Flexivel e atrativo de gerenciar
            <b>seus projetos em uma unica plataforma</b>
          </Text>
        </Grid>
        <FormLogin />
      </Flex>
    </Flex>
  );
}
