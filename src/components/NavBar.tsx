import { Box, HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <HStack padding="20px" paddingBottom={10} spacing="24px">
        <Link to={'/'}>
          <Image src={logo} boxSize="40px" />
        </Link>

        <Box width="100%">
          <SearchInput />
        </Box>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
