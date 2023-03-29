import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import NotFoundImg from "../../assets/not-found.svg";

export function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Flex
      padding="10px 15px"
      alignItems="center"
      justifyContent="space-evenly"
      minH="100vh"
      flexDir={["column-reverse", "column-reverse", "row"]}
    >
      <Box mt="4">
        <Heading>Oooops!</Heading>
        <Text mt="4">
          Não encontramos a página que você procurou, <br />
          <b>vamos tentar novamente.</b>
        </Text>
        <Button mt="4" bg="red.600" h="60px" color="white" w="full" _hover={{ bg: "red.700" }} onClick={() => navigate("/")}>
          Ir para minhas tarefas
        </Button>
      </Box>
      <Image src={NotFoundImg} alt="Not found" />
    </Flex>
  );
}
