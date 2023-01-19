/* eslint-disable react/jsx-props-no-spreading */
import {
  Flex,
  Grid,
  Image,
  Heading,
  Text,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm, FieldError, FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as yup from "yup";

import logoSegundaria from "../assets/logo-secondary.svg";
import { TextField } from "../components";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

export function Login() {
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: FieldValues): void => {
    setLoading(true);
    setInterval(() => setLoading(false), 1000);
    console.log(data);
  };

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
      <Flex
        w={["full", "full", "90%", "70%"]}
        justifyContent="center"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
      >
        <Grid w={["full", "full", "50%"]} paddingRight="50px">
          <Image
            src={logoSegundaria}
            alt="logo doit"
            boxSize={["120px", "120px", "150px"]}
          />
          <Heading as="h1" my="4">
            O jeito fácil, gratis
          </Heading>
          <Text width={["auto", "350px"]}>
            Flexivel e atrativo de gerenciar
            <b>seus projetos em uma unica plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          w={["full", "full", "50%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          color="gray.900"
          bg="white"
          mt={["8", "8", "0"]}
        >
          <Heading size="lg">Bem vindo de volta</Heading>
          <VStack mt="6" spacing="5">
            <Box w="full">
              <TextField
                icon={FaEnvelope}
                label="Email"
                placeholder="Digite seu email"
                type="email"
                error={errors.email as FieldError}
                {...register("email")}
              />
              {!errors?.email && (
                <Text ml="1" mt="1" color="gray.500">
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
                <Text ml="1" mt="1" color="gray.500">
                  Use uma senha segura ex: 2@jLxc88
                </Text>
              )}
            </Box>

            <Button
              isLoading={loading}
              bg="purple.500"
              w="full"
              type="submit"
              color="white"
              h="60px"
              _hover={{ background: "purple.900" }}
            >
              Entrar
            </Button>
            <Text color="gray.400">Ainda não possui uma conta?</Text>
            <Button
              bg="gray.100"
              w="full"
              color="gray.300"
              h="60px"
              _hover={{ background: "gray.200" }}
            >
              Entrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
}
