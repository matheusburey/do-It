import { Grid, Heading, Text, VStack, Button, Box } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { IDataSignIn } from "../../api/types";
import { TextField } from "../../components/Form";
import { useAuth } from "../../providers/Auth";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio").email("Email invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

export function LoginForm() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IDataSignIn>({ resolver: yupResolver(signInSchema) });

  const [loading, setLoading] = useState(false);

  const handleSignIn = async (data: IDataSignIn): Promise<void> => {
    setLoading(true);
    const login = await signIn(data);
    setInterval(() => setLoading(false), 1000);
    if (login) {
      navigate("/dashboard");
    }
  };

  return (
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

        <Button isLoading={loading} bg="purple.500" w="full" type="submit" color="white" h="60px" _hover={{ background: "purple.900" }}>
          Entrar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button bg="gray.100" w="full" color="gray.300" h="60px" _hover={{ background: "gray.200" }} onClick={() => navigate("/signup")}>
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
}
