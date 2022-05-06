import { AppProps } from 'next/app'; // para deixar o componente tipado

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
