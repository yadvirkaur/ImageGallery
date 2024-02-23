import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useImages from '../hooks/useImages';
import ImageCard from './ImageCard';

interface Props {
  sortOrder: string;
}

const ImageGrid = ({ sortOrder }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useImages(sortOrder);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      //  dataLength is the total no of items fetched so far
      hasMore={!!hasNextPage}
      // by applying !!, undefined value turns into false
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={10}
      >
        {isLoading && <p>Loading...</p>}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((image) => (
              <Box borderRadius={10} overflow={'hidden'} key={image.id}>
                <ImageCard image={image} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ImageGrid;
