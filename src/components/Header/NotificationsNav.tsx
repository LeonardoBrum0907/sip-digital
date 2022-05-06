import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine } from "react-icons/ri";

export function NotificationsNav() {
    return (
        <Flex
                align="center"
                ml="auto"
            >
                <HStack //componente do next para dar espaço horizontal
                    spacing={["3","5"]}
                    mx={["3","5"]}
                    pr={["3","5"]}
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    {/* <Icon as={RiUserAddLine} fontSize="20" /> */}
                </HStack>
            </Flex>
    );
}