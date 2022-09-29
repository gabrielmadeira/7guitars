import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  HStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export default function MainNav(userType) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("black", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        justify={"flex-end"}
        minH={"5rem"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Stack
          justify={"space-between"}
          direction={"row"}
          align={"center"}
          w={"100%"}
        >
          <Logo h="10vmin" pointerEvents="none" justify={"flex-start"} />
          {CreateNavText("test")}
        </Stack>
      </Flex>
    </Box>
  );
}

const navBarPerUser = {
  user: ["MontarInstrumento", "Biblioteca", "Carrinho", "AcompanharPedidos"],
  loggedOut: ["Login", "Register"],
  adm: ["GerenciarEstoque", "AnalisePedidos"],
};

function CreateNavText(userType) {
  // TODO MUDAR AQUI
  userType = "loggedOut";
  return (
    <HStack
      spacing={"5rem"}
      pr={"5rem"}
      color={useColorModeValue("gray.600", "white")}
    >
      {mapByUserType(userType)}
    </HStack>
  );
}

function mapByUserType(userType) {
  return navBarPerUser[userType].map((x) => (
    <Link to={ "/" + x.toLowerCase()}>
      <Button
        // as={'a'}
        fontSize={"md"}
        color={"white"}
        fontWeight={400}
        variant={"link"}
      >
        {x}
      </Button>
    </Link>
  ));
}

const notLoogedIn = () => {
  return (
    <div>
      <HStack spacing={"5rem"} pr={"5rem"}>
        <Link to="/login">
          <Button
            // as={'a'}
            fontSize={"md"}
            color={"white"}
            fontWeight={400}
            variant={"link"}
          >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            // as={'a'}
            fontSize={"md"}
            color={"white"}
            fontWeight={400}
            variant={"link"}
          >
            Register
          </Button>
        </Link>
      </HStack>
    </div>
  );
};
{
  /* 

          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#BD1A6D'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Oferecer Serviço
          </Button> */
}
{
  /* <ColorModeSwitcher justifySelf="flex-end" /> */
}
