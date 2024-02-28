import React from 'react';
import { Card, Image } from '@chakra-ui/react';
import { Photo } from '../hooks/useImages';
import { Blurhash } from 'react-blurhash';
import Like from './Like';
import Download from './Download';

interface Props {
  image: Photo;
}

const ImageCard = ({ image }: Props) => {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);
  const [hovering, setHovering] = React.useState<boolean>(false);

  return (
    <Card
      shadow="sm"
      overflow={'hidden'}
      key={image.id}
      position="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {image.blur_hash && !imageLoaded && (
        <Blurhash
          hash={image.blur_hash}
          width="200"
          height="300px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <Image
        src={image.urls.thumb}
        alt={image.alt_description}
        onLoad={() => setImageLoaded(true)}
        display={imageLoaded ? 'block' : 'none'}
        height="300px"
        objectFit="cover"
      />

      <Like hovering={hovering} image={image} />
      <Download imageDownloadLink={image.links.download} hovering={hovering} />
    </Card>
  );
};

export default ImageCard;
