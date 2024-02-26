import { Box, HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import logo from '../assets/logo.svg';
const NavBar = () => {
  return (
    <div>
      <HStack padding="20px" paddingBottom={10} spacing="24px">
        <Image src={logo} boxSize="40px" />
        <Box width="100%">
          <SearchInput />
        </Box>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
