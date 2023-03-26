import {
  Text,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  HStack,
  Heading,
  Flex,
  Progress,
  Box,
} from "@chakra-ui/react";
import { FaCheck, FaCube, FaTimes, FaTrash } from "react-icons/fa";

import { ITask } from "../../api/tasks/types";
import { useAuth } from "../../providers/Auth";
import { useTasks } from "../../providers/Tasks";
import { theme } from "../../styles/theme";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  task: ITask;
}

export function TasksDetail({ isOpen, onClose, task }: IProps) {
  const { user } = useAuth();
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id, user.acessToken);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="2" bg="white" color="gray.800">
        <ModalHeader display="flex" justifyContent="space-between">
          <Flex>
            <Center bg="purple.500" w="30px" h="30px" borderRadius="5px">
              <FaCube color={theme.colors.white} />
            </Center>
            <Text fontWeight="bold" ml="2">
              Visualizar
            </Text>
          </Flex>
          <HStack spacing="2">
            <Center
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderRadius="5px"
              borderColor="gray.2000"
              bg="white"
              onClick={handleDelete}
            >
              <FaTrash color={theme.colors.gray["300"]} />
            </Center>
            <Center
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderRadius="5px"
              borderColor="gray.2000"
              bg="white"
              onClick={() => updateTask(task.id, user.acessToken)}
            >
              <FaCheck color={theme.colors.gray["300"]} />
            </Center>
            <Center bg="red.600" w="32px" h="32px" ml="auto" borderRadius="md" fontSize="lg" onClick={onClose}>
              <FaTimes color={theme.colors.white} />
            </Center>
          </HStack>
        </ModalHeader>

        <ModalBody>
          <Heading as="h1" fontSize="2xl">
            {task.title}
          </Heading>
          <Text color="gray.400">{task.description}</Text>
        </ModalBody>

        <Box p="6">
          <Progress colorScheme="purple" value={task.completed ? 100 : 10} />
          <Text color="gray.200" mt="3">
            26 mar 2023
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
}
