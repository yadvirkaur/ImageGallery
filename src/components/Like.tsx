import { Box } from '@chakra-ui/react';
import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { Photo } from '../hooks/useImages';

interface Props {
  hovering: boolean;
  image: Photo;
}
const Like = ({ hovering, image }: Props) => {
  const [likedImagesList, setLikedImageslist] = React.useState(() => {
    const storedLikedImages = localStorage.getItem('likedImages');
    return storedLikedImages ? JSON.parse(storedLikedImages) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(likedImagesList));
  }, [likedImagesList]);

  const handleLikeClick = () => {
    // setLiked(!liked);
    setLikedImageslist((prevLikedImages: Photo[]) => {
      if (prevLikedImages.find((likedImage) => likedImage.id === image.id)) {
        return prevLikedImages.filter(
          (likedImage) => likedImage.id !== image.id
        );
      } else {
        return [...prevLikedImages, image];
      }
    });
  };

  const isLiked = likedImagesList.find(
    (likedImage: Photo) => likedImage.id === image.id
  );

  return (
    <div>
      <Box
        position="absolute"
        top="5%"
        right="5%"
        bg="#fff"
        borderRadius="8px"
        padding="2"
        opacity={hovering ? 1 : 0}
        transition="opacity 0.3s"
        zIndex="1"
        onClick={handleLikeClick}
      >
        {isLiked ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
      </Box>
    </div>
  );
};

export default Like;
