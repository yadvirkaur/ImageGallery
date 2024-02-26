/**
 * A component that renders a grid of images fetched using the `useImages` hook.
 * The grid is rendered based on whether the data page contains results or not.
 * @returns JSX element representing the image grid.
 */

import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageCard from './ImageCard';
import useImages from '../hooks/useImages';

const ImageGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useImages();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => {
      if ('results' in page) {
        return total + page.results.length;
      } else {
        return total + page.length;
      }
    }, 0) || 0;

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
        spacing={3}
        padding={10}
      >
        {isLoading && <p>Loading...</p>}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {('results' in page ? page.results : page).map((image) => (
              <Box
                shadow="sm"
                borderRadius={10}
                overflow={'hidden'}
                key={image.id}
              >
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
