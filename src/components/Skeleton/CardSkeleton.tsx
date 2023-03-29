import { Skeleton } from "@chakra-ui/react";

export function CardSkeleton() {
  const howMany = Array.from(Array(6).keys());

  return (
    <>
      {howMany.map((i) => (
        <Skeleton h="150px" key={i} speed={1} startColor="gray.100" endColor="gray.200" w={["93vw", "auto"]} />
      ))}
    </>
  );
}
