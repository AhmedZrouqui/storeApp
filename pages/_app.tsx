import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from "../redux/store";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
          <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
          </ChakraProvider>
      </Provider>
  )
}

export default MyApp
