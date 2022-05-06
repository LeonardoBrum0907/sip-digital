import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Summary } from "../components/Summary";
import { TableInfos } from "../components/TableInfos";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr:false,
})

const options: ApexOptions = {
  chart: {
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500]
  },
  grid: {
      show: false,
  },
  dataLabels: {
      enabled: false,
  },
  tooltip: {
      enabled: false,
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: theme.colors.gray[600]
      },
      axisTicks: {
          color: theme.colors.gray[600]
      },
      categories: [
          '2021-03-11T00:00.000Z',
          '2021-03-12T00:00.000Z',
          '2021-03-13T00:00.000Z',
          '2021-03-14T00:00.000Z',
          '2021-03-15T00:00.000Z',
          '2021-03-16T00:00.000Z',
          '2021-03-17T00:00.000Z',
          '2021-03-18T00:00.000Z',
          '2021-03-19T00:00.000Z',
      ]
  },
  fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'drak',
          opacityFrom: 0.9,
          opacityTo: 0.1,
      }
  }
};

const series = [
    {
        name: 'series1',
        data: [123, 31, 18, 145, 78, 28, 250, 12, 150]
    },
    {
        name: 'series2',
        data: [50, 200, 80, 180, 78, 200, 30, 12, 80]
    }
]

export default function Home() {
  return (
    <Flex direction='column' h='100vh'>

      <Flex w="100%" maxW={1480} mx="auto">
        <Sidebar />

        {/* componente do chakra que permite criar uma grid de maneira simples. flex='1' faz com que a dashboard ocupe o espaço que sobrou do lado da sidebar. gap='4' da um espaçamento entre as rows e column da grid. minchildwidth faz com que todos os filhos da grid tenha no inimo esse tamanho, faz com que seja responsivo de maneira automatizada */}

        <Flex flex='1' direction='column' gap='5' p='5' overflowY='scroll' overflowX='hidden' maxH='100vh'>
          <Header />

          <SimpleGrid gap="4" minChildWidth="200px" alignItems="flex-start">
            <Summary name="Unidade Registradas" value={1}/> 
            <Summary name='Novos clientes' value={104}/> 
            <Summary name='Vendas Realizadas' value={7270}/> 
            <Summary name='Lucro Liquido (Geral)' value={406.890}/> 
            
          </SimpleGrid>

          <Box
              p={["5","8"]}
              bg="gray.50"
              borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Relatório de vendas</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>

          <Box bg='gray.50' borderRadius={8}>
            <TableInfos />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
