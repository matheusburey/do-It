import { Box, Skeleton } from "@chakra-ui/react";

export function CardSkeleton() {
  const howMany = Array.from(Array(6).keys());

  return (
    <>
      {howMany.map((i) => (
        <Skeleton key={i} speed={1} startColor="gray.100" endColor="gray.200">
          <Box p="7" h="150px" boxShadow="base" bg="white" />
        </Skeleton>
      ))}
    </>
  );
}
