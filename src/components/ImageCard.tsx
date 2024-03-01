import React from 'react';
import { Card } from '@chakra-ui/react';
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
      position="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {image.blur_hash && !imageLoaded && (
        <Blurhash
          hash={image.blur_hash}
          width="100%"
          height="300px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      <img
        alt={image.alt_description}
        srcSet={`
           ${image.urls.raw}&w=100&auto=format&fit=crop&q=50 100w,
           ${image.urls.raw}&w=200&auto=format&fit=crop&q=50 200w,
           ${image.urls.raw}&w=300&auto=format&fit=crop&q=50 300w,
           ${image.urls.raw}&w=400&auto=format&fit=crop&q=50 400w,
           ${image.urls.raw}&w=500&auto=format&fit=crop&q=50 500w,
           ${image.urls.raw}&w=600&auto=format&fit=crop&q=50 600w,
           ${image.urls.raw}&w=700&auto=format&fit=crop&q=50 700w,
           ${image.urls.raw}&w=800&auto=format&fit=crop&q=50 800w,

         `}
        src={`${image.urls.raw}&w=600&auto=format&fit=crop&q=60`}
        sizes="(min-width: 1600px) 345px,
         (min-width: 1401px) calc(calc(100vw - 160px) / 4),
         (min-width: 901px) calc(calc(100vw - 60px) / 3),
         (min-width: 501px) calc(calc(100vw - 15px) / 2),
          calc(100vw - 30px)"
        onLoad={() => setImageLoaded(true)}
        style={{
          display: imageLoaded ? 'block' : 'none',
          height: '300px',
          objectFit: 'cover',
        }}
      />

      <Like hovering={hovering} image={image} />
      <Download imageDownloadLink={image.links.download} hovering={hovering} />
    </Card>
  );
};

export default ImageCard;
