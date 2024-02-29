/**
 * A component that renders a grid of images fetched using the `useImages` hook.
 * The grid is rendered based on whether the data page contains results or not.
 * @returns JSX element representing the image grid.
 */

import { Box, Spinner, Text } from '@chakra-ui/react';
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
      <div className="image-grid">
        {isLoading && <p>Loading...</p>}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {('results' in page ? page.results : page).map((image) => (
              <Box key={image.id} overflow={'hidden'}>
                <ImageCard key={image.id} image={image} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default ImageGrid;
