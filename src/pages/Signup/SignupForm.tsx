import { Grid, Heading, Text, VStack, Button, Box, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { sigUpApi } from "../../api/user";
import { IDataSignUp } from "../../api/user/types";
import { TextField } from "../../components/Form";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
  confirmPassword: yup
    .string()
    .required("confirmação de senha obrigatoria")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export function SignupForm() {
  const navigate = useNavigate();
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IDataSignUp>({ resolver: yupResolver(signUpSchema) });

  const handleSignUp = async (data: IDataSignUp): Promise<void> => {
    setLoading(true);
    const res = await sigUpApi(data);
    console.log(res);

    setInterval(() => setLoading(false), 1000);
    if (res.detail.status === "ok") {
      toast({ position: "top-right", title: "Conta criada com sucesso", status: "success" });
      navigate("/");
    }
    toast({ position: "top-right", title: res.detail.description, status: "error" });
    setLoading(false);
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleSignUp)}
      as="form"
      w={["full", "full", "50%"]}
      padding="30px 25px"
      border="3px solid"
      borderColor="gray.100"
      color="gray.900"
      bg="white"
      mt={["8", "8", "0"]}
    >
      <Heading size="lg">Crie sua conta </Heading>
      <VStack mt="6" spacing="5">
        <Box w="full">
          <TextField
            icon={FaUser}
            label="Nome"
            placeholder="Digite seu Name"
            type="text"
            error={errors.name as FieldError}
            {...register("name")}
          />
          {!errors?.name && (
            <Text fontSize="sm" ml="1" mt="1" color="gray.500">
              Ex: Fulano
            </Text>
          )}
        </Box>
        <Box w="full">
          <TextField
            icon={FaEnvelope}
            label="Email"
            placeholder="Digite seu email"
            type="text"
            error={errors.email as FieldError}
            {...register("email")}
          />
          {!errors?.email && (
            <Text fontSize="sm" ml="1" mt="1" color="gray.500">
              Ex: nome@email.com
            </Text>
          )}
        </Box>
        <Box w="full">
          <TextField
            icon={FaLock}
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            error={errors.password as FieldError}
            {...register("password")}
          />
          {!errors?.password && (
            <Text fontSize="sm" ml="1" mt="1" color="gray.500">
              Use uma senha segura ex: 2@jLxc88
            </Text>
          )}
        </Box>
        <Box w="full">
          <TextField
            icon={FaLock}
            label="Confirme sua senha"
            type="password"
            placeholder="Confirmação de senha"
            error={errors.confirmPassword as FieldError}
            {...register("confirmPassword")}
          />
          {!errors?.confirmPassword && (
            <Text fontSize="sm" ml="1" mt="1" color="gray.500">
              Repita a sua senha ex: 2@jLxc88
            </Text>
          )}
        </Box>

        <Button isLoading={loading} bg="purple.500" w="full" type="submit" color="white" h="60px" _hover={{ background: "purple.900" }}>
          Finalizar cadastro
        </Button>
      </VStack>
    </Grid>
  );
}
