import { Box, Center, Flex, Heading, HStack, Progress, Text } from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";

import { ITask } from "../../api/tasks/types";
import { theme } from "../../styles/theme";

interface IProps {
  task: ITask;
}

export function Card({ task }: IProps) {
  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.100"
      boxShadow="base"
      p="7"
      w={["330px", "auto"]}
    >
      <Flex justify="space-between">
        <Heading as="h1" size="md">
          {task.title}
        </Heading>
        <HStack spacing="4">
          <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.2000" bg="white">
            <FaTrash color={theme.colors.gray["300"]} />
          </Center>
          <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.2000" bg="white">
            <FaCheck color={theme.colors.gray["300"]} />
          </Center>
        </HStack>
      </Flex>
      <Box w="full" mt="4">
        <Text>{task.description}</Text>
        <Progress colorScheme="purple" mt="2.5" value={task.completed ? 100 : 10} />
        <Text color="gray.300" mt="3">
          18 mar 2023
        </Text>
      </Box>
    </Box>
  );
}
