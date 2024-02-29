import { Box, Flex, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Flex className="navbar" paddingBottom={10} align="center" gap="24px">
        <Link to={'/'}>
          <Image src={logo} boxSize="40px" />
        </Link>
        <Box width="100%">
          <SearchInput />
        </Box>
        <ColorModeSwitch />
      </Flex>
    </div>
  );
};

export default NavBar;
