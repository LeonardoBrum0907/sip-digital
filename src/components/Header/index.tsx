import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  // const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
      base: false,
      md: true,
  })
  const isDrawerSidebar = useBreakpointValue({
      base: false,
      lg: true,
  })


  return (
      <Flex 
          as="header"
          w="100%"
          maxWidth={1480}
          mx="auto"
          align="center"
      >
          { !isDrawerSidebar && (
              <IconButton 
                  aria-label="Open navigation"
                  // icon={<Icon as={RiMenuLine} />}
                  fontSize="24"
                  variant="unstyled"
                  // onClick={onOpen}
                  mr="2"
              />
          )}

          { isWideVersion && <SearchBox />}            

          <NotificationsNav />

          <Profile showProfileData={isWideVersion} />
      </Flex>
  );
}