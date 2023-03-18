import { Flex, Input, Center, Button, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import { CreateNewTask } from "../../components/Modals";
import { theme } from "../../styles/theme";

export function Search() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex w="full" px={["4", "8"]} py="6" borderBottomWidth="1px" borderColor="gray.100">
      <Flex>
        <Input h="60px" placeholder="Pesquisar por tarefa" _focus={{ bg: "gray.100" }} w="35vw" />
        <Center borderRadius="md" bg="purple.600" ml="2" w="65px" h="60px" fontSize="2xl0" _hover={{ bg: "purple.900" }}>
          <FaSearch color={theme.colors.white} />
        </Center>
      </Flex>
      <Button bg="purple.500" color="white" px="16" ml="4" h="60px" borderRadius="md" _hover={{ bg: "purple.600" }} onClick={onOpen}>
        Adicionar uma nova tarefa
      </Button>
      <CreateNewTask isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
