import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';

function Layout({children}) {
  return (
      <Box maxW="100vw" minH="100vh" bg="offWhite">
        <Box maxW="1420px" mx="auto" px="20px">
          <Header />
          {children}
        </Box>
      </Box>
  );
}

export default Layout;
