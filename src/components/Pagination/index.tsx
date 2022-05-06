import { Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowForward } from 'react-icons/io';
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return(
    <Flex m='6' align='center' gap='2'>
      <PaginationItem number={1} isCurrent/>
      <PaginationItem number={2}/>
      <PaginationItem number={3}/>

      <Icon as={IoIosArrowForward} _hover={{cursor:'pointer'}}/>    
    </Flex>
  );
}