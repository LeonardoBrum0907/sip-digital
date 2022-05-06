import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const isWideVersion = useBreakpointValue({
      base: false,
      md: true,
  })

  return (
      <Flex 
          as="header"
          w="100%"
          maxWidth={1480}
          mx="auto"
          align="center"
      >
          { isWideVersion && <SearchBox />}            

          <NotificationsNav />

          <Profile />
      </Flex>
  );
}