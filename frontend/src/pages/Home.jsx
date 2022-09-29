import React from 'react';

import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import '../styles/styles.css';
import MainNav from '../components/MainNav';

export const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainNav />

      <Box className="home" h="100vh" textAlign="center" fontSize="xl">
        {/* <Grid p={3}>
          <VStack spacing={8}>
            <Logo h="30vmin" pointerEvents="none" />
            <InputGroup size="lg" width="629px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.400" />}
              />
              <Input
                background-color="#282c34"
                placeholder="Qual Serviço Você Procura?"
                size="lg"
                width="629px"
                textAlign="center"
              />
            </InputGroup>
            <Button
              bg={'#BD1A6D'}
              color={'white'}
              width="222px"
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
            >
              Pesquisa Toaki
            </Button>
          </VStack>
        </Grid> */}
      </Box>
    </ChakraProvider>
  );
};
