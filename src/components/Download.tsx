import { Button } from '@chakra-ui/react';
import { GoDownload } from 'react-icons/go';

interface Props {
  imageDownloadLink: string;
  hovering: boolean;
}
const Download = ({ imageDownloadLink, hovering }: Props) => {
  const downloadLink = `${imageDownloadLink}&force=true`;

  return (
    <>
      <Button
        as="a"
        href={downloadLink}
        leftIcon={<GoDownload />}
        colorScheme="teal"
        variant="solid"
        position="absolute"
        bottom="5%"
        right="5%"
        borderRadius="20px"
        padding="2"
        paddingInline={4}
        opacity={hovering ? 1 : 0}
        transition="opacity 0.3s"
        zIndex="1"
        fontWeight={400}
      >
        Download
      </Button>
      {/* OR as below */}
      {/* <a href={`${imageDownloadLink}&force=true`}>Download</a> */}
    </>
  );
};

export default Download;
