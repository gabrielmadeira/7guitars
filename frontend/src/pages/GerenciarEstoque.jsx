import { React, useState, useEffect } from "react";
import CadastroEstoque from "./cadastroEstoque"
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

function GerenciarEstoque() {
  let [pecaNome, setPecaNome] = useState("corda"); // TODO: change later
  let [id, setId] = useState(0);
  let [value, setValue] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [sorted, setSorted] = useState(false);
  let [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://sevenguitars.herokuapp.com/getPartsOfType?section=" + pecaNome
      );
      const data = response.data;
      setPostArray(data.Variacoes);
    };
    fetchData();
  }, []);

  async function deletePost(postId, name) {
    setPostArray(postArray.filter((post) => post.id !== postId));
    const obj = { name: name, section: "corda" };
    const response = await fetch(
      "https://sevenguitars.herokuapp.com/deletePart",
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(obj),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  async function addPart(event) {
    if (value) {
      const post = {
        id: id,
        text: value,
        price: price,
        description: description,
        quantity: quantity,
      };

      postArray.unshift(post);

      setValue("");
      setPrice("");
      setDescription("");
      setId(id + 1);
      // TODO fix this conversion
      const obj = {
        name: post.text,
        quantity: post.quantity,
        section: "corda",
        price: post.price,
        description: post.description,
      };
      const response = await fetch(
        "https://sevenguitars.herokuapp.com/deletePart",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const data = await response.json();
      console.log(data);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addPart();
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <MainNav />
      <Flex
        width="full"
        height="full"
        align="center"
        justifyContent="center"
        h="100vh"
        bgColor="orange"
      >
        <Flex
          width="full"
          height="full"
          align="flex-start"
          justifyContent="center"
          h="100vh"
          bgColor="blue"
        >
          <Box p={6}>
            <Box my={12} textAlign="center">
              <Heading color="black">Gerenciar Estoque</Heading>
            </Box>
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
              <form onSubmit={() => addPart()}>
                <FormControl isRequired>
                  <Select placeholder="Selecione a peça">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>

                  <Input
                    type="text"
                    name="text"
                    placeholder="Insira a variação"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <Input
                    type="price"
                    name="price"
                    placeholder="Insira o preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <Input
                    type="price"
                    name="price"
                    placeholder="Insira a descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>

                <Button width="full" mt={4} type="submit">
                  Inserir
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>

        <Flex
          width="full"
          height="full"
          align="center"
          justifyContent="center"
          h="100vh"
          bgColor="red"
          direction="column"
        >

          <Heading> aaa </Heading>
          {CadastroEstoque()}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default GerenciarEstoque;
