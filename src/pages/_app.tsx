import { ChakraProvider } from '@chakra-ui/react'; // contexto que fica por volta do app para que possa utilizar o theme em toda aplicação
import { AppProps } from 'next/app'; // para deixar o componente tipado
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
}

export default MyApp
