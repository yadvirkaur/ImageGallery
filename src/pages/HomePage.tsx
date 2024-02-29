import ImageGrid from '../components/ImageGrid';
import SortSelector from '../components/SortSelector';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <HStack className="image-header" spacing="24px">
        <SortSelector />
        <Link to={'/likes'}>
          <Button>Your Likes</Button>
        </Link>
      </HStack>
      <ImageGrid />
    </>
  );
};

export default App;
