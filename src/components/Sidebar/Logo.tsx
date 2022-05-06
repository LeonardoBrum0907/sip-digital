import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={["2xl","3xl"]}
            color='gray.900'
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            bg='gray.50'
        >
            SIP Digital
            <Text as="span" ml="1" color="blue.500">.</Text>
        </Text>
    );
}