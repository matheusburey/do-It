import { Center, theme } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ButtonGoBack() {
  const navigate = useNavigate();

  return (
    <Center
      bg="purple.500"
      borderRadius="md"
      fontSize="2xl"
      as="button"
      position="absolute"
      top="50px"
      left={["75vw", "75vw", "35"]}
      w={["60px", "80px"]}
      h="60px"
      _hover={{ bg: "purple.600" }}
      onClick={() => navigate("/")}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
}
