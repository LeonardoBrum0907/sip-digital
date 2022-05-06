import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiShutDownLine } from "react-icons/ri";
import { Logo } from "./Logo";

export function Sidebar() {
  return(
    <Box as='aside' w='64' h='100vh' bg='gray.50'>
      <Box w='100%' h={190}>
        <Flex h='100%' pl='12' alignItems='center' >
          <Logo />
        </Flex>
      </Box>

      <Stack pl='10' spacing='12' align='flex-start'>
        <Box>
          <Stack spacing='10' align='stretch'>
            <Link display='flex' alignItems='center' color='blue.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>

            <Link display='flex' alignItems='center' color='gray.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Pedidos</Text>
            </Link>

            <Link display='flex' alignItems='center' color='gray.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Produtos</Text>
            </Link>

            <Link display='flex' alignItems='center' color='gray.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Clientes</Text>
            </Link>

            <Link display='flex' alignItems='center' color='gray.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Financeiro</Text>
            </Link>
            
            <Link display='flex' alignItems='center' color='gray.500' >
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Usuários</Text>
            </Link>
          </Stack>
        </Box>

      </Stack>

      <Flex align='center' position='absolute' bottom='5' left='10' _hover={{cursor: 'pointer'}}> 
        <Icon as={RiShutDownLine} mr='5' fontSize='20px'/>        
        <Text >Logout   </Text>
      </Flex>
    </Box>
  );
}