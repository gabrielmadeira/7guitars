import { React, useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import MainNav from '../components/MainNav';

function AnaliseDePedidos() {
  return (
    <ChakraProvider theme={theme}>
      <MainNav />
      <Flex
        width="full"
        height="full"
        align="flex-start"
        justifyContent="center"
        h="100vh"
      >
        <Box p={6}>
          <Box my={12} textAlign="center">
            <Heading color="black">AnaliseDePedidos</Heading>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default AnaliseDePedidos;
