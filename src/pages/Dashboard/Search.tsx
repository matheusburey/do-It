import { Flex, Input, Center, Button, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

import { CreateNewTask } from "../../components/Modals";
import { useTasks } from "../../providers/Tasks";
import { theme } from "../../styles/theme";

interface ISearchData {
  title: string;
}

export function Search() {
  const { searchTask } = useTasks();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { handleSubmit, register } = useForm<ISearchData>();

  const handleSearch = ({ title }: ISearchData) => searchTask(title);

  return (
    <Flex w="full" px={["4", "8"]} py="6" borderBottomWidth="1px" borderColor="gray.100" flexDirection={["column", "column", "row"]}>
      <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
        <Input
          h="60px"
          placeholder="Pesquisar por tarefa"
          _focus={{ bg: "gray.100" }}
          w={["full", "full", "35vw"]}
          {...register("title")}
        />
        <Center
          as="button"
          type="submit"
          borderRadius="md"
          bg="purple.600"
          ml="2"
          w="65px"
          h="60px"
          fontSize="2xl0"
          _hover={{ bg: "purple.900" }}
        >
          <FaSearch color={theme.colors.white} />
        </Center>
      </Flex>
      <Button
        bg="purple.500"
        color="white"
        mt={["4", "4", "0"]}
        px="16"
        ml={["0", "0", "4"]}
        h="60px"
        borderRadius="md"
        _hover={{ bg: "purple.600" }}
        onClick={onOpen}
      >
        Adicionar uma nova tarefa
      </Button>
      <CreateNewTask isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
