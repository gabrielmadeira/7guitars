import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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

function CadastroEstoque(secoes) {
  const secoesArray = secoes;
  // console.log(secoesArray);
  // const [secoesArray, setSecoesArray] = useState([]);
  const [partArray, setPartArray] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // const postArray = obj.postList;

  // useEffect(() => {
  //   let Variacoes1 = [
  //     {
  //       "id": "633b424b3d72919496fca9b3",
  //       "text": "Obsidiana",
  //       "price": "80",
  //       "quantity": 0,
  //       "description": "Nova"
  //     },
  //     {
  //       "id": "633b439e91c0517549320a36",
  //       "text": "Ouro",
  //       "price": "90",
  //       "quantity": 0,
  //       "description": "Brilhante"
  //     }
  //   ]
  //   let Variacoes2 = [
  //     {
  //       "id": "633b48f591c0517549320a78",
  //       "text": "Mithril",
  //       "price": "80",
  //       "quantity": 0,
  //       "description": "Azul"
  //     },
  //     {
  //       "id": "633b494391c0517549320a82",
  //       "text": "SedaOriginal",
  //       "price": "12",
  //       "quantity": 0,
  //       "description": "Da china"
  //     }
  //   ]
  //   let result = [Variacoes1, Variacoes2]
  //   console.log(result);
  // }, []);

  useEffect(() => {
    let partsSections = [];
    const fetchData = async (secao) => {
      const response = await axios(
        "https://sevenguitars.herokuapp.com/getPartsOfType?section=" + secao
      );
      const data = response.data;
      partsSections.push(data.Variacoes);
      // console.log(partsSections);
      // setPostArray(data.Variacoes);
    };
    secoesArray.forEach(secao => {
      // console.log(secao.name);
      fetchData(secao.name);
    });
    
  }, [secoesArray]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios(
  //       "https://sevenguitars.herokuapp.com/getPartsOfType?section=" + partName
  //     );
  //     const data = response.data;
  //     setPostArray(data.Variacoes);
  //   };
  //   fetchData();
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="full"
        height="full"
        align="center"
        // justifyContent="center"
        h="100vh"
        bgColor="purple"
        direction="column"
      >
        <Box my={12} textAlign="center">
          <Heading color="black">Gerenciar Estoque</Heading>
        </Box>
        <Box
          my={6}
          textAlign="left"
          p={8}
          maxWidth="600px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bgColor="white"
        > 
          <Accordion defaultIndex={[0]} allowToggle minWidth="300px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default CadastroEstoque;
