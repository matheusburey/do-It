import { Button, Text, Center, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldError } from "react-hook-form";
import { FaClipboard, FaTimes } from "react-icons/fa";
import * as yup from "yup";

import { theme } from "../../styles/theme";
import { TextField, TextArea } from "../Form";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const signInSchema = yup.object().shape({
  title: yup.string().required("Titulo obrigatório"),
  description: yup.string().required("Descrição obrigatória").max(100, "Máximo de 100 caracteres"),
});

export function CreateNewTask({ isOpen, onClose }: IProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const handleCreateTask = (data: any) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(handleCreateTask)} p="2" bg="white" color="gray.800">
        <ModalHeader display="flex">
          <Center bg="purple.500" w="30px" h="30px" borderRadius="5px">
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Adicionar
          </Text>
          <Center bg="red.600" w="32px" h="32px" ml="auto" borderRadius="md" as="button" fontSize="lg" onClick={onClose}>
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody textAlign="center">
          <VStack spacing="5">
            <TextField label="Titulo" placeholder="Digite o titulo" error={errors.title as FieldError} {...register("title")} />
            <TextArea
              label="Descrição"
              placeholder="Digite a descrição"
              error={errors.description as FieldError}
              {...register("description")}
            />
          </VStack>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button bg="purple.500" color="white" w="full" h="60px" _hover={{ bg: "purple.600" }} type="submit">
            Adicionar tarefa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
