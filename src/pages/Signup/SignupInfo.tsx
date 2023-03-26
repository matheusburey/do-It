import { Grid, Image, Heading, Text, VStack, Flex, Center, Box } from "@chakra-ui/react";
import { BsBoxes } from "react-icons/bs";
import { FaForward } from "react-icons/fa";

import logoSegundaria from "../../assets/logo-secondary.svg";
import { theme } from "../../styles/theme";

export function SignupInfo() {
  return (
    <Grid w={["full", "full", "50%"]} paddingLeft={["0", "0", "150px"]}>
      <Image src={logoSegundaria} alt="logo doit" boxSize={["120px", "120px", "150px"]} />
      <VStack spacing="14" mt={["20px", "20px", "0"]}>
        <Flex w="full">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaForward color={theme.colors.purple["800"]} size="25" />
          </Center>
          <Box ml="4">
            <Heading size="lg">Agilidade</Heading>
            <Text>
              Agilize seu projetos com rapidez <br /> e muita performace
            </Text>
          </Box>
        </Flex>
        <Flex w="full">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <BsBoxes color={theme.colors.purple["800"]} size="25" />
          </Center>
          <Box ml="4">
            <Heading size="lg">Simplicidade</Heading>
            <Text>
              Armazene seus projetos em uma <br /> interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
}
