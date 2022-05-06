import { Box, Button, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Pagination } from "../Pagination";

export function TableInfos() {
  const TableData = [
    {
      pedido: '011246',
      data: '30/10',
      produtos: 'Ver quantidade',
      total: 'R$200,00',
      comprador: 'Comprador A',
      statusDoPedido: 'Pronto para embalar',
      acaoRecomendada: 'marcar como embalado',
    },
    {
      pedido: '011246',
      data: '30/10',
      produtos: 'Ver quantidade',
      total: 'R$200,00',
      comprador: 'Comprador A',
      statusDoPedido: 'Pronto para embalar',
      acaoRecomendada: 'marcar como embalado',
    },
    {
      pedido: '011246',
      data: '30/10',
      produtos: 'Ver quantidade',
      total: 'R$200,00',
      comprador: 'Comprador A',
      statusDoPedido: 'Pronto para embalar',
      acaoRecomendada: 'marcar como embalado',
    },
    {
      pedido: '011246',
      data: '30/10',
      produtos: 'Ver quantidade',
      total: 'R$200,00',
      comprador: 'Comprador A',
      statusDoPedido: 'Pronto para embalar',
      acaoRecomendada: 'marcar como embalado',
    },
  ]
  return (
    <Box overflowX='scroll' overflowY='hidden' maxW={1020}>
    <Text fontSize={20} m='24px'>Ultimos pedidos realizados</Text>
    <Table colorScheme="whiteAlpha">
      <Thead >
        <Tr>
          <Th px={["1","2","6"]} color="gray.900" >Pedido</Th>
          <Th px={["1","2","6"]} color="gray.900" >Data</Th>
          <Th px={["1","2","6"]} color="gray.900" >Produtos</Th>
          <Th px={["1","2","6"]} color="gray.900" >Total</Th>
          <Th px={["1","2","6"]} color="gray.900" >Comprador</Th>
          <Th px={["1","2","6"]} color="gray.900" >Status do Pedido</Th>
          <Th px={["1","2","6"]} color="gray.900" >Ação recomendada</Th>
        </Tr>
      </Thead>

      <Tbody>
        {TableData.map((info, idx) => {
          return (
            <Tr key={idx}>
              <Td color='gray.400'>{info.pedido}</Td>
              <Td color='gray.400'>{info.data}</Td>
              <Td color='blue.500'>{info.produtos}</Td>
              <Td color='gray.400'>{info.total}</Td>
              <Td color='gray.400'>{info.comprador}</Td>
              <Td color='gray.400'>{info.statusDoPedido}</Td>
              <Td color='gray.400'>
                <Button bg='blue.500' color='gray.50' >{info.acaoRecomendada}</Button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>

    <Pagination />

  </Box>
  );
}