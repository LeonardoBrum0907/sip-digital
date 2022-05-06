import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;// a interrogação diz que essa props é opcional
}

export function PaginationItem({ number, isCurrent}: PaginationItemProps) {

    if (isCurrent) {
        return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="blue.500"
            disabled
            _disabled={{
                bgColor: 'blue.500',
                cursor: 'deafult',
            }}//estilizaação para quando o componente está disabled(desabilitado)
        >
            {number}
        </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.50"
            _hover={{
                bg: "gray.200"
            }}
            onClick={() => {}}
        >
            {number}
        </Button>
    );
}