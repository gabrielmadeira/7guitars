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
import { ArrowForwardIcon } from "@chakra-ui/icons";

function GerenciarEstoque() {
  let [parteNome, setParteNome] = useState(''); // TODO: change later
  let [id, setId] = useState(0);
  let [value, setValue] = useState('');
  let [price, setPrice] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState(0);
  let [sorted, setSorted] = useState(false);
  let [partesArray, setPartesArray] = useState([]);
  let [postArray, setPostArray] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios(
  //       "https://sevenguitars.herokuapp.com/getPartsOfType?section=" + pecaNome
  //     );
  //     const data = response.data;
  //     setPostArray(data.Variacoes);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://sevenguitars.herokuapp.com/getAllSections"
      );
      const data = response.data;
      setPartesArray(data);
    };
    fetchData();
  }, []);

  // async function deletePost(postId, name) {
  //   setPostArray(postArray.filter((post) => post.id !== postId));
  //   const obj = { name: name, section: "corda" };
  //   const response = await fetch(
  //     "https://sevenguitars.herokuapp.com/deletePart",
  //     {
  //       method: "DELETE",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify(obj),
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  async function addPart(event) {
    if (value) {
      const post = {
        id: id,
        text: value,
        price: price,
        description: description,
        quantity: quantity,
      };
      // console.log(post);

      postArray.unshift(post);

      setValue("");
      setPrice("");
      setDescription("");
      setId(id + 1);
      // TODO fix this conversion
      const obj = {
        name: post.text,
        quantity: post.quantity,
        section: parteNome,
        price: post.price,
        description: post.description,
      };
      const response = await fetch(
        "https://sevenguitars.herokuapp.com/registerPart",
        {
          method: "POST",
          // credentials: "include",
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

  const mapPecas = () => {
    return partesArray.map((parte, index) => (
      <option value={parte.name} key={index}>{parte.name}</option>
    ));
  }

  // function mapByUserType(userType) {  
  //   return navBarPerUser[userType].map((x) => (
  //     <Link to={ "/" + x.toLowerCase().replace(/\s+/g, '')}>
  //       <Button
  //         fontSize={"md"}
  //         color={"white"}
  //         fontWeight={400}
  //         variant={"link"}
  //       >
  //         {x}
  //       </Button>
  //     </Link>
  //   ));
  // }
  

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
              <form onSubmit={addPart}>
                <FormControl isRequired>
                  <Select placeholder="Selecione a peça" onChange={(e) => setParteNome(e.target.value)}>
                    {mapPecas()}
                  </Select>

                  <Input
                    type="text"
                    name="text"
                    placeholder="Insira a variação"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoComplete="off"
                  />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <Input
                    type="price"
                    name="price"
                    placeholder="Insira o preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoComplete="off"
                  />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <Input
                    type="price"
                    name="price"
                    placeholder="Insira a descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoComplete="off"
                  />
                </FormControl>

                <Button width="full" mt={4} type="submit">
                  Inserir
                </Button>
                {/* <Button width="full" mt={4} type="test" onClick={console.log(parteNome)}>
                  Teste
                </Button> */}
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
