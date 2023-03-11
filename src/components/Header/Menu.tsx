import { Box, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

import { useAuth } from "../../providers/Auth";
import { theme } from "../../styles/theme";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Menu({ isOpen, onClose }: IProps) {
  const { signOut, user } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="8vh" />
      <DrawerContent ml="auto" mt="80px" w={["450", "350px"]}>
        <DrawerHeader borderBottomWidth="1px" borderColor="gray.50" color="gray.400">
          {user?.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex align="center" onClick={signOut} _hover={{ cursor: "pointer" }}>
            <Center w="60px" h="60px" bg="red.600" fontSize="2xl" borderRadius="md">
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg">
                Sair da minha conta
              </Heading>
              <Text color="gray.300" fontSize="small">
                Sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
