import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Photo } from '../hooks/useImages';

interface Props {
  image: Photo;
}

const ImageCard = ({ image }: Props) => {
  return (
    <Card>
      <Image src={image.urls.thumb}></Image>
      <CardBody>
        <Heading fontSize="2xl">{image.alt_description}</Heading>
      </CardBody>
    </Card>
  );
};

export default ImageCard;
