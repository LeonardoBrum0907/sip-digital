import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { RiStoreLine } from "react-icons/ri";

interface SummaryProps {
  name: string;
  value: number;
}

export function Summary({name, value}: SummaryProps) {
  return (
    <Flex
      align='center'
      p={["3","5"]}
      bg="gray.50"
      borderRadius={8}
      gap='2'
      shadow='lg'
    >
      <Icon as={RiStoreLine} fontSize='30' color='blue.500'  />

      <Box flexDirection='column'>
        <Text fontSize='14px'>{name}</Text>
        <Text color='blue.500'>{value}</Text>
      </Box>

    </Flex>
  );
}