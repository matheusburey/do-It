import { Grid, Image, Heading, Text } from "@chakra-ui/react";

import logoSegundaria from "../../assets/logo-secondary.svg";

export function LoginInfo() {
  return (
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
  );
}
