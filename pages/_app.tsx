import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from "../redux/store";
import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
          <ChakraProvider>
                <Component {...pageProps} />
          </ChakraProvider>
      </Provider>
  )
}

export default MyApp
