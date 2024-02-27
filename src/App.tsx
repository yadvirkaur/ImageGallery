import ImageGrid from './components/ImageGrid';
import SortSelector from './components/SortSelector';
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react';
import YourLikes from './pages/YourLikes';

const App = () => {
  return (
    <>
      <NavBar />
      <YourLikes />
      <Box paddingLeft={10}>
        <SortSelector />
      </Box>
      <ImageGrid />
    </>
  );
};

export default App;
