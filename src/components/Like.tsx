import { Box } from '@chakra-ui/react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { Photo } from '../hooks/useImages';
import useLikesStore from '../likesStore';

interface Props {
  hovering: boolean;
  image: Photo;
}
const Like = ({ hovering, image }: Props) => {
  const likedImages = useLikesStore((s) => s.likedImages);
  const addLikedImage = useLikesStore((s) => s.addLikedImage);
  const removeLikedImage = useLikesStore((s) => s.removeLikedImage);

  const isLiked = likedImages.find(
    (likedImage: Photo) => likedImage.id === image.id
  );

  const handleLikeClick = () => {
    if (isLiked) {
      removeLikedImage(image.id);
    } else {
      addLikedImage(image);
    }
  };

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
