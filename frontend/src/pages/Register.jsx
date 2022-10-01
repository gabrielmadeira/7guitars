import { React, useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  HStack,
  theme,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import MainNav from '../components/MainNav';

function Register() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [admin] = useState(false);
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })

  async function registerUser(event) {
    event.preventDefault();
    // const response = await fetch('http://127.0.0.1:3000/register', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    const response = await fetch('https://sevenguitars.herokuapp.com/register', {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        cpf,
        email,
        password,
        admin,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data) {
      alert('Registro bem sucedido');
    } else {
      alert('Falha no Registro');
    }
  }

  const onInputChange = e => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value)
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value)
    }    
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) { 
        case "password":
          if (confirmPassword && value !== confirmPassword) {
            stateObj["confirmPassword"] = "As senhas não são iguais";
          } else {
            stateObj["confirmPassword"] = confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (password && value !== password) {
            stateObj[name] = "As senhas não são iguais";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  };

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
            <form onSubmit={registerUser}>
              <HStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
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
              </HStack>
              <HStack spacing={6} mt={6}>
                <FormControl isRequired>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="*******"
                    value={password}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.password && <span className='err'>{error.password}</span>}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirme Senha</FormLabel>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="*******"
                    value={confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateInput}
                  />
                  {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                </FormControl>
              </HStack>
              <HStack spacing={6} mt={6}>
                <FormControl isRequired>
                  <FormLabel>CPF</FormLabel>
                  <Input
                    type="text"
                    name="cpf"
                    placeholder="Seu CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Endereço</FormLabel>
                  <Input
                    type="text"
                    name="endereco"
                    placeholder="Seu endereço"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <Button width="full" mt={4} type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Register;
