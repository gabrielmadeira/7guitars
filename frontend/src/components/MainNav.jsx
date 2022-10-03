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


const navBarPerUser = {
  user: ["Montar Instrumento", "Biblioteca", "Carrinho", "Meus Pedidos"],
  loggedOut: ["Login", "Register"],
  adm: ["Gerenciar Estoque", "Analise de Pedidos"],
};

const MainNav = ({ userType='adm'}) => {
  

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
        {/* <Flex
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
        </Flex> */}
        <Stack
          justify={"space-between"}
          direction={"row"}
          align={"center"}
          w={"100%"}
        >
          <Logo h="10vmin" pointerEvents="none" justify={"flex-start"} />
          {CreateNavText(userType)}
        </Stack>
      </Flex>
    </Box>
  );
}


function CreateNavText(userType) {
  // TODO MUDAR AQUI 
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
  return navBarPerUser[userType].map((x, index) => (
    <Link key={index} to={ "/" + x.toLowerCase().replace(/\s+/g, '')}>
      <Button
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

export default MainNav;

// {
//   <ColorModeSwitcher justifySelf="flex-end" />
// }
