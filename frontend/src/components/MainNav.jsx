import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export default function MainNav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        justify={'flex-end'}
        minH={'5rem'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Stack justify={'space-between'} direction={'row'} align={'center'} w={'100%'}>
          <Logo h="10vmin" pointerEvents="none" justify={'flex-start'} />
          <Box>
            <Link to="/signin">
              <Button
                mr={'5rem'}
                as={'a'}
                fontSize={'md'}
                color={'white'}
                fontWeight={400}
                variant={'link'}
              >
                Login
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                mr={'5rem'}
                as={'a'}
                fontSize={'md'}
                color={'white'}
                fontWeight={400}
                variant={'link'}
              >
                Register
              </Button>
            </Link>
          </Box>
          {/* <Button
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
          </Button> */}
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Stack>
      </Flex>
    </Box>
  );
}
