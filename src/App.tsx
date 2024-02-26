import ImageGrid from './components/ImageGrid';
import SortSelector from './components/SortSelector';
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <NavBar />

      <Box paddingLeft={10}>
        <SortSelector />
      </Box>
      <ImageGrid />
    </>
  );
};

export default App;
