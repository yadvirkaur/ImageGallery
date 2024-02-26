import React from 'react';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Photo } from '../hooks/useImages';
import { Blurhash } from 'react-blurhash';

interface Props {
  image: Photo;
}

const ImageCard = ({ image }: Props) => {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);
  return (
    <Card>
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
      />
      <CardBody>
        <Heading fontSize="2xl">{image.alt_description}</Heading>
      </CardBody>
    </Card>
  );
};

export default ImageCard;
