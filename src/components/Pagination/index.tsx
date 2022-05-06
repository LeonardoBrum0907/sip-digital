import { Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowForward } from 'react-icons/io';
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return(
    <Flex m='6' align='center'>
      <PaginationItem number={1} isCurrent/>
      <PaginationItem number={2}/>
      <PaginationItem number={3}/>
      <PaginationItem number={4}/>
      <PaginationItem number={5}/>

      <Icon as={IoIosArrowForward} _hover={{cursor:'pointer'}}/>    
    </Flex>
  );
}