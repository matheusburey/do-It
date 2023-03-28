import { Box, Skeleton, Stack } from "@chakra-ui/react";

export function CardNotFoundSkeleton() {
  return (
    <Box mt="6" w={["80%", "40%"]} p="6" boxShadow="base" bg="white">
      <Stack>
        <Skeleton startColor="gray.100" endColor="gray.200" h="20px" borderRadius="20px" w="80%" />
        <Skeleton startColor="gray.100" endColor="gray.200" h="20px" borderRadius="20px" w="60%" />
      </Stack>
      <Stack mt="8">
        <Skeleton startColor="gray.100" endColor="gray.200" h="15px" borderRadius="15px" />
        <Skeleton startColor="gray.100" endColor="gray.200" h="15px" borderRadius="15px" />
      </Stack>
    </Box>
  );
}
