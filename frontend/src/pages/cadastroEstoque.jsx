import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Select,
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
} from "@chakra-ui/react";
import MainNav from "../components/MainNav";

function CadastroEstoque(nome,preco,descricao,) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="full"
        height="full"
        align="center"
        justifyContent="center"
        h="100vh"
        bgColor="purple"
        direction="column"
      >
        <Box
          my={6}
          textAlign="left"
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bgColor="white"
        >
          <Heading> aaa </Heading>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default CadastroEstoque;
