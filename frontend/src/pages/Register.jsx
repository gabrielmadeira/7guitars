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

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEnd] = useState('');

  async function loginUser(event) {
    event.preventDefault();
    // const response = await fetch('http://localhost:3000/login', {
    //   method: 'POST',
    //   // credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    const response = await fetch('https://sevenguitars.herokuapp.com/login', {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data) {
      alert('Login bem sucedido');
    } else {
      alert('Falha no Login');
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <MainNav />
      <Flex
        // className="loginContainer"
        width="full"
        height="full"
        align="flex-start"
        justifyContent="center"
        h="100vh"
      >
        <Box p={6}>
          <Box my={12} textAlign="center">
            <Heading color="black">Register</Heading>
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
            <form onSubmit={loginUser}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="senha"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>CPF</FormLabel>
                <Input
                  type="text"
                  name="cpf"
                  placeholder="Seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Endereço</FormLabel>
                <Input
                  type="text"
                  name="endereco"
                  placeholder="Seu endereço"
                  value={endereco}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </FormControl>

              <Button width="full" mt={4} type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>

    // <div className="loginContainer">
    //   <h1> Login </h1>
    //   <form className="Center" onSubmit={loginUser}>
    //     <label className="Center">
    //       Email:
    //       <input
    //         type="text"
    //         value={email}
    //         name="email"
    //         className="login"
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Email"
    //       />
    //       Senha:
    //       <input
    //         type="text"
    //         value={password}
    //         name="senha"
    //         className="login"
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Senha"
    //       />
    //     </label>
    //     <label>
    //       <input type="submit" value="Enviar" />
    //     </label>
    //   </form>
    // </div>
  );
}

export default Register;
