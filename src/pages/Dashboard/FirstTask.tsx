import { Center, Button, Heading, Box, Text } from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";

interface IProp {
  onOpen: () => void;
}

export function FirstTask({ onOpen }: IProp) {
  return (
    <Box
      mt="4"
      w="90vw"
      py="16"
      px="2"
      ml="5vw"
      justifyContent="center"
      textAlign="center"
      borderWidth="2px"
      borderColor="gray.200"
      borderStyle="dashed"
    >
      <Center fontSize="5xl">
        <FaClipboard color="#bdbdbd" />
      </Center>
      <Heading fontSize="4xl" as="h1" mt="4">
        Vamos criar sua primeira tarega
      </Heading>
      <Text color="gray.400" mt="6">
        Insira sua meta e a você mesmo <br />
        sua capacidade em cumprir{" "}
        <Text as="b" color="gray.900">
          suas atividade
        </Text>
      </Text>
      <Button p="6" mt="6" bg="purple.800" color="white" _hover={{ bg: "purple.900" }} onClick={onOpen}>
        Criar sua primeira tarefa
      </Button>
    </Box>
  );
}
