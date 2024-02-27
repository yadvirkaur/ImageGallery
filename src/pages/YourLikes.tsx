import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';
import { Photo } from '../hooks/useImages';

const YourLikes = () => {
  const likedImagesString = localStorage.getItem('likedImages');
  const likedImages = likedImagesString ? JSON.parse(likedImagesString) : [];

  return (
    <Box padding={10}>
      <Text fontWeight={500} marginBottom={2}>
        {likedImages.length === 0 ? '' : 'Your Liked Images'}
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {likedImages.map((image: Photo) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default YourLikes;
