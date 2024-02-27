import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

const Like = ({ hovering }: { hovering: boolean }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {/* <Like hovering={hovering} onClick={() => setLiked(!liked)} /> */}

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
        onClick={() => setLiked(!liked)}
      >
        {liked ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
      </Box>
    </div>
  );
};

export default Like;
