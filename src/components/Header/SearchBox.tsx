import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="4"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.50"
      borderRadius="full"
    >
      <Icon as={RiSearchLine} m="auto" color="blue.500" />
      <Input
        color="gray.900"
        variant="unstyled"
        px="2"
        mr="2"
        placeholder="Pesquisar"
        _placeholder={{ color: "gray.500" }}
      />
    </Flex>
  );
}
