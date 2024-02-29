import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';
import { Photo } from '../hooks/useImages';

const YourLikes = () => {
  const likedImagesString = localStorage.getItem('likedImages');
  const likedImages = likedImagesString ? JSON.parse(likedImagesString) : [];

  return (
    <Box>
      <Text className="image-header" fontWeight={500} marginBottom={2}>
        {likedImages.length === 0 ? '' : 'Your Liked Images'}
      </Text>

      <div className="image-grid">
        {likedImages.map((image: Photo) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </Box>
  );
};

export default YourLikes;
