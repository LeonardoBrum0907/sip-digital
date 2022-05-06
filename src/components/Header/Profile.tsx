import { Avatar, Flex } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
           {/* { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Leonardo Brum</Text>
                    <Text color ="gray.300" fontSize="small">leonardobrum0907@gmail.com</Text>
                </Box>
            )} */}
            

            <Avatar size="md" name="Leonardo Brum" />
        </Flex>
    );
}